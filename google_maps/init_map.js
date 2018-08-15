//search bar
import initAutocomplete from "../interactivity/search_bar.js";
//basic US census geometry
import load_tracts from "./load_census_tracts.js";
import load_counties from "./load_county_borders.js";
import load_places from "./load_selected_IL_places";
//used to shade tracts/places
import {set_tracts_style} from "./set_tracts_style.js";
import {set_places_style} from "./set_places_style.js";
import {set_tracts_style_gradient, find_max_gradient_val, find_min_gradient_val} from "./set_tracts_style_gradient.js";
//the tract nums for different overlays
var OZ_tract_nums = require('../static_data/OZs/IL_QAZs_tract_nums.json');
var QCT_tract_nums = require('../static_data/QCTs/IL_QCTs_tract_nums.json');
var OA_tract_nums = require('../static_data/OAs/IHDA_OA_tract_nums.json');
var OA_place_names = require('../static_data/OAs/IDHA_OA_places.json');
var affordable_market_share = require('../static_data/indicators/affordable_market_share.json');
var travel_time_to_work = require('../static_data/indicators/travel_time_to_work.json')

//these need to be global because they are exported and passed into various functions
var tracts_array, borders_array, places_array;

export function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });

  //load all borders, census tracts and initial shading
  map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson'); //load chicago borders
  map.data.setStyle({
    strokeWeight: 1,
    fillOpacity: 0
  });
  borders_array = load_counties(map); //load county borders
  tracts_array = load_tracts(map); //load census tracts. keys are poly and geoid
  places_array = load_places(map); //load places, which is U.S. Census Bureau language for municipalities etc.

  //set initial state of each overlay
  set_tracts_style(tracts_array, OZ_tract_nums, 0, 'red', null);
  set_tracts_style(tracts_array, QCT_tract_nums, 1, 'teal', null);
  set_tracts_style_gradient(tracts_array, affordable_market_share, 2, 'orange', 1, 0, null);
  set_tracts_style(tracts_array, OA_tract_nums, 3, 'navy', null);
  set_places_style(places_array, OA_place_names, 'navy', null);
  //set_tracts_style_gradient(tracts_array, travel_time_to_work, 5, 'indigo', 50, 25, map)

  //load search bar
  initAutocomplete(map);

  //hooray! done!
  return map;
}

export {tracts_array, borders_array, places_array};
