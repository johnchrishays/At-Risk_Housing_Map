import load_tracts from "./load_census_tracts.js"
import load_counties from "./load_county_borders.js"
export default function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 9
  });
  map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson'); //load chicago borders
  map.data.setStyle({
    strokeWeight: 1,
    fillOpacity: 0
  });
  var borders_array = load_counties(map); //load county borders
  var tracts_array = load_tracts(map); //load census tracts
}
