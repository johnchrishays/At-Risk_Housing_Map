//search bar
import initAutocomplete from "../interactivity/search_bar.js";
//basic US census geometry
import load_tracts from "./load_census_tracts.js";
import load_counties from "./load_county_borders.js";
import load_places from "./load_IL_places.js";
import {load_markers} from "./load_markers.js"
//used to shade tracts/places
import {set_tracts_style} from "./set_tracts_style.js";
import {set_places_style} from "./set_places_style.js";
import {set_tracts_style_gradient, find_max_gradient_val, find_min_gradient_val} from "./set_tracts_style_gradient.js";
import {set_places_style_gradient} from "./set_places_style_gradient.js";
//the tract nums for different overlays
var OZ_tract_nums = require('../static_data/OZs/IL_QAZs_tract_nums.json');
var QCT_tract_nums = require('../static_data/QCTs/IL_QCTs_tract_nums.json');
var OA_tract_nums = require('../static_data/OAs/IHDA_OA_tract_nums.json');
var OA_place_names = require('../static_data/OAs/IDHA_OA_places.json');
var affordable_market_share = require('../static_data/indicators/affordable_market_share.json');
var affordable_market_share_places = require('../static_data/indicators/affordable_market_share_places.json');
affordable_market_share_places.sort(function(a, b){return a.geoid > b.geoid});
var travel_time_to_work = require('../static_data/indicators/travel_time_to_work.json');
var travel_time_to_work_places = require('../static_data/indicators/travel_time_to_work_places.json');
travel_time_to_work_places.sort(function(a, b){return a.geoid > b.geoid});
var hospitals = require('../static_data/indicators/IL_hospitals.json');
var food_access = require('../static_data/indicators/food_access.json');

//these need to be global because they are exported and passed into various functions
var tracts_array, borders_array, OA_places_array, travel_time_places_array, affordable_market_share_places_array, hospitals_array;

export function initMap() {
  //boiler plate to select zoom and center of map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10,
    fullscreenControl: false
  });

  //load all borders, census tracts and initial shading
  map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson'); //load chicago borders
  map.data.setStyle({
    strokeWeight: 1,
    fillOpacity: 0
  });
  borders_array = load_counties(map); //load county borders
  tracts_array = load_tracts(map); //load census tracts. keys are poly and geoid
  OA_places_array = load_places(map); //load places, which is U.S. Census Bureau language for municipalities etc.
  travel_time_places_array = load_places(map);
  affordable_market_share_places_array = load_places(map);
  hospitals_array = load_markers(hospitals, 'H', null);
  // or maybe set up for https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png

  //set initial state of each overlay
  set_tracts_style(tracts_array, OZ_tract_nums, 0, 'red', null);
  set_tracts_style(tracts_array, QCT_tract_nums, 1, 'teal', null);
  set_tracts_style_gradient(tracts_array, affordable_market_share, 2, 'orange', 1, 0, null);
  set_places_style_gradient(affordable_market_share_places_array, affordable_market_share_places, 'orange', 1, 0, null);
  set_tracts_style(tracts_array, OA_tract_nums, 3, 'navy', null);
  set_places_style(OA_places_array, OA_place_names, 'navy', null);
  set_tracts_style_gradient(tracts_array, travel_time_to_work, 5, 'brown', 50, 25, null);
  set_places_style_gradient(travel_time_places_array, travel_time_to_work_places, 'brown', 50, 25, null);
  //poly_index = 6 is for the hospitals
  set_tracts_style(tracts_array, food_access, 7, 'coral', null);

  //load search bar
  initAutocomplete(map);

  //hooray! done!
  return map;
}

export {tracts_array, borders_array, OA_places_array, travel_time_places_array, affordable_market_share_places_array, hospitals_array};
