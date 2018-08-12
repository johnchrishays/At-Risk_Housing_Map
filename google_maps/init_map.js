import load_tracts from "./load_census_tracts.js";
import load_counties from "./load_county_borders.js";
import {set_tracts_style} from "./set_tracts_style.js";

var tracts_array;
var borders_array;

export function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });
  map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson'); //load chicago borders
  map.data.setStyle({
    strokeWeight: 1,
    fillOpacity: 0
  });
  borders_array = load_counties(map); //load county borders
  tracts_array = load_tracts(map); //load census tracts. keys are poly and geoid
  set_tracts_style(tracts_array, map);
  return map;
}

export {tracts_array, borders_array};
