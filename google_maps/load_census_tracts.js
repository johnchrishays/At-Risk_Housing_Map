var tracts = require("../shapefiles/IL_census_tracts.json");

export default function load_tracts(map){
  var tracts_array = [];
  var temp;
  for(var n=0; n<tracts.length; n++){
    temp = new google.maps.Polygon({
      paths: tracts[n]['coords'],
      strokeOpacity: 1,
      strokeWeight: .1,
      fillColor: 'red',
      fillOpacity: 0
    });
    tracts_array.push({poly: temp, geoid: tracts[n]['geoid']});
    tracts_array[n].poly.setMap(map);
  }
  return tracts_array;
}
