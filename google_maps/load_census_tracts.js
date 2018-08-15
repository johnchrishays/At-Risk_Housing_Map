var tracts = require("../shapefiles/IL_census_tracts/IL_census_tracts.json");
import {NUM_OVERLAYS} from "../src/main.js";

export default function load_tracts(map){
  var tracts_array = [];
  var temp;
  for(var n=0; n<tracts.length; n++){
    var temp_poly_list = [];
    //this allows me to have multiple colors overlapping on the map. I actually set up multiple polys
    //thus, depending on tracts_array.polys[i], I can turn off and on multiple census tracts
    for(var j=0; j<NUM_OVERLAYS; j++){
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
