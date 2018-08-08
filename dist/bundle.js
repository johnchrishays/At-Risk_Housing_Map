(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var google_maps = require('../google_maps/init_map.js');
var gm = new google_maps();
var map;

},{"../google_maps/init_map.js":2}],2:[function(require,module,exports){
function initMap() {
  //boiler plate to select zoom and center of map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.830, lng: -87.633},
    zoom: 10
  });
  //map.data.loadGeoJson('https://data.cityofchicago.org/resource/qqq8-j68g.geojson');
  //borders_chicago = require('../borders_chicago.json')
  map.data.addGeoJson('../shapefiles/borders_chicago');
  map.data.setStyle({
    strokeWeight: .5,
    fillOpacity: 0
  });
}
module.exports = initMap;

},{}]},{},[1]);
