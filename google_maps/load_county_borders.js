var borders = require("../shapefiles/IL_counties.json");

export default function load_counties(map){
  var borders_array = [];
  var temp;
  for(var n=0; n<borders.length; n++){
    temp = new google.maps.Polygon({
      paths: borders[n]['coords'],
      strokeOpacity: 1,
      strokeWeight: 1,
      fillOpacity: 0
    });
    borders_array.push({poly: temp, geoid: borders[n]['geoid']});
    borders_array[n].poly.setMap(map);
  }
  return borders_array;
}
