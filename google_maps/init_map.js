import cook_co_boundaries from "../shapefiles/cook_co.js"
import dupage_co_boundaries from "../shapefiles/dupage_co.js"
import lake_co_boundaries from "../shapefiles/lake_co.js"
export default function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });
  //map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson');
  //borders_chicago = require('../shapefiles/borders_chicago.geojson');
  //map.data.addGeoJson(borders_chicago);
  map.data.setStyle({
    strokeWeight: .5,
    fillOpacity: 0
  });
  var cook_co = new google.maps.Polygon({
    paths: cook_co_boundaries,
    //strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillOpacity: 0
  });
  cook_co.setMap(map);
  var dupage_co = new google.maps.Polygon({
    paths: dupage_co_boundaries,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillOpacity: 0
  });
  dupage_co.setMap(map);
  var lake_co = new google.maps.Polygon({
    paths: lake_co_boundaries,
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillOpacity: 0
  });
  lake_co.setMap(map);
}
