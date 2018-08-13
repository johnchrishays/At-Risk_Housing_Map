import initAutocomplete from "../interactivity/search_bar.js";
import load_tracts from "./load_census_tracts.js";
import load_counties from "./load_county_borders.js";
import {set_tracts_style} from "./set_tracts_style.js";
import {set_tracts_style_gradient} from "./set_tracts_style_gradient.js";
import {get_designated_OAs, get_designated_proximate_OAs} from "./OA_tract_designations.js";
var OZ_tract_nums = require('../static_data/OZs/IL_QAZs_tract_nums.json');
var QCT_tract_nums = require('../static_data/QCTs/IL_QCTs_tract_nums.json');
var OA_tract_nums = get_designated_OAs();
var proximate_OA_tract_nums = get_designated_proximate_OAs();

var tracts_array;
var borders_array;

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
  set_tracts_style(tracts_array, OZ_tract_nums, 0, 'red', null);
  set_tracts_style(tracts_array, QCT_tract_nums, 1, 'teal', null);
  set_tracts_style_gradient(tracts_array, 2, 'orange', null);
  set_tracts_style(tracts_array, OA_tract_nums, 3, 'navy', null);
  set_tracts_style(tracts_array, proximate_OA_tract_nums, 4, 'skyblue', null);

  //load search bar
  initAutocomplete(map);

  //done!
  return map;
}

export {tracts_array, borders_array};
