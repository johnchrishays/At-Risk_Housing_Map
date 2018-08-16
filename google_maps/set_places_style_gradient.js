//initializer that sets the colors and values of places
//places_array is the master array with all of the places and polys
//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the places
export function set_places_style_gradient(places_array, gradient_array, color, max_val, min_val, map){
  var j=0;
  var num_places_styled = 0;
  var opacity;
  for (var i=0; i<gradient_array.length; i++){
    while(places_array[j].name < gradient_array[i].geoid) j++;
    if(gradient_array[i].geoid === places_array[j].name){
      for (var k=0; k<places_array[j]['polys'].length; k++){
        if(gradient_array[i].val > max_val) opacity = 1; //unfortunately, the PolicyMap statistics do not seem accurate since some values are above 100%
        else if(gradient_array[i].val < min_val) opacity = 0;
        else opacity = (gradient_array[i].val - min_val) / (max_val - min_val);
        places_array[j]['polys'][k].fillOpacity = opacity;
        places_array[j]['polys'][k].fillColor = color;
        places_array[j]['polys'][k].setMap(map);
      }
      num_places_styled++;
    }
    else console.log("Warning: place name ", gradient_array[i].geoid, " is not being styled.");
  }
  if(num_places_styled != gradient_array.length) console.log("Warning: Not as many places were added as there are in place_names_to_style: ", num_places_styled, gradient_array.length)
}
