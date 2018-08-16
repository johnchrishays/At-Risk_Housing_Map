var places = require('../shapefiles/IL_places/IL_places.json');

export default function load_places(map){
  var places_array = [];
  var temp;
  for(var n=0; n<places.length; n++){
    var temp_poly_list = [];
    //this allows me to have multiple polys for one place, since some places are not contiguous
    for(var i=0; i<places[i].coords.length; i++){
      temp = new google.maps.Polygon({
        paths: places[n]['coords'][i],
        strokeOpacity: 1,
        strokeWeight: .1,
        fillColor: 'red',
        fillOpacity: 0
      });
      temp.setMap(map);
      temp_poly_list.push(temp);
    }
    places_array.push({polys: temp_poly_list, name: places[n]['name']});
  }
  return places_array;
}
