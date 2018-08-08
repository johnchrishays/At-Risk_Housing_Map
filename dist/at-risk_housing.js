//var chicagoBorders = require('../shapefiles/Borders_Chicago.geojson');
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });
  //map.data.addGeoJson(chicagoBorders);
  map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson');
  map.data.setStyle({
    strokeWeight: 1,
    fillOpacity: 0
  });
  var kmlLayer = new google.maps.KmlLayer({
    url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwjBmvHXlNncAhXmmOAKHURvD20QFjABegQICRAC&url=http%3A%2F%2Fgis1.cookcountyil.gov%2Farcgis%2Frest%2Fservices%2FBasemap%2FclerkBaseSrvc%2FMapServer%3Ff%3Dkmz&usg=AOvVaw2E0OigEP0tyMzsaA6YcJIC',
    //url: 'http://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_20m.kml',
    preserveViewport: true,
    map: map
  });
  //allPlaces = $.getJSON('http://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_5m.json', function(data) {
    //data is the JSON string
  //});
  //window.alert(JSON.stringify(allPlaces))
}

initMap()
