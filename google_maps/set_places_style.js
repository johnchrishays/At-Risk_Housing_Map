//initializer that sets the colors and values of places
//places_array is the master array with all of the places and polys
//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the places
export function set_places_style(places_array, place_names_to_style, color, map){
  var j=0;
  var num_places_styled = 0;
  for (var i=0; i<place_names_to_style.length; i++){
    //console.log(place_names_to_style[i])
    while(places_array[j].name < place_names_to_style[i]) j++;
    if(place_names_to_style[i] === places_array[j].name){
      for (var k=0; k<places_array[j]['polys'].length; k++){
        places_array[j]['polys'][k].fillOpacity = 0.6;
        places_array[j]['polys'][k].fillColor = color;
        places_array[j]['polys'][k].setMap(map);
      }
      num_places_styled++;
    }
    else console.log("Warning: place name ", place_names_to_style[i], " is not being styled.");
  }
  if(num_places_styled != place_names_to_style.length) console.log("Warning: Not as many places were added as there are in place_names_to_style: ", num_places_styled, place_names_to_style.length)
}

//places_array is the master array with all of the places and polys
//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the places
export function toggle_data_visibility_places(places_array, map){ //map might be null or map
  for (var i=0; i<places_array.length; i++){
    for (var j=0; j<places_array[i]['polys'].length; j++){
      places_array[i]['polys'][j].setMap(map);
    }
  }
}
