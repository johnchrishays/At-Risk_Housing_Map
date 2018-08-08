function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });
  //map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson');
  borders_chicago = require('../shapefiles/borders_chicago.geojson');
  map.data.addGeoJson(borders_chicago);
  map.data.setStyle({
    strokeWeight: .5,
    fillOpacity: 0
  });
}
module.exports = initMap;
