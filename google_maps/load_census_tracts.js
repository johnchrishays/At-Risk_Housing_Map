var tracts = require("../shapefiles/IL_census_tracts.json");

export default function load_tracts(map){
  var tracts_array = [];
  var temp;
  for(var n=0; n<tracts.length; n++){
    var temp_poly_list = [];
    for(var j=0; j<2; j++){
      temp = new google.maps.Polygon({
        paths: tracts[n]['coords'],
        strokeOpacity: 1,
        strokeWeight: .1,
        fillColor: 'red',
        fillOpacity: 0
      });
      temp.setMap(map);
      temp_poly_list.push(temp);
    }
    tracts_array.push({polys: temp_poly_list, geoid: tracts[n]['geoid']});
  }
  return tracts_array;
}
