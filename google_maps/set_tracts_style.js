//initializer that sets the colors and values of tracts
//tracts_array is the master array with all of the census tracts and polys
//tract_nums_to_style is the simple array of ints that determines which census tracts are "turned on" and which aren't
//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the tracts
export function set_tracts_style(tracts_array, tract_nums_to_style, poly_index, color, map){
  if(!is_sorted(tract_nums_to_style)) tract_nums_to_style = tract_nums_to_style.sort(function(a, b){return a - b});
  var num_tracts_styled = 0;
  var j = 0;
  for (var i=0; i<tract_nums_to_style.length; i++){
    while(tracts_array[j].geoid < tract_nums_to_style[i]) j++; //fast forward through tracts we don't care about
    if(tract_nums_to_style[i] == tracts_array[j].geoid){
      tracts_array[j]['polys'][poly_index].fillOpacity = 0.6;
      tracts_array[j]['polys'][poly_index].fillColor = color;
      tracts_array[j]['polys'][poly_index].setMap(map);
      num_tracts_styled++;
    }
    else console.log("Warning: tract geoid ", tracts_array[j].geoid, " is not being styled.");
  }
  if(num_tracts_styled != tract_nums_to_style.length) console.log("Warning: Not as many tracts were added as there are in tract_nums_to_style: ", num_tracts_styled, tract_nums_to_style.length)
}

//tracts_array is the master array with all of the census tracts and polys
//tract_nums_to_toggle is the simple array of ints that determines which census tracts are "turned on" and which aren't
//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the tracts
export function toggle_data_visibility(tracts_array, poly_index, map, transit_layer){ //map might be null or map
  if(poly_index == 5) { //special case: for the transit layer
    transit_layer.setMap(map); //this is actually not an array in this case
    return;
  }
  for (var i=0; i<tracts_array.length; i++){
  tracts_array[i]['polys'][poly_index].setMap(map);
  }
}

//helper for debugging. exactly what it sounds like for array of numbers
function is_sorted(tract_nums){
  for(var i=0; i<tract_nums.length-1; i++){
    if(tract_nums[i] > tract_nums[i+1]){
      return false;
      console.log("Tract_nums are not sorted!")
    }
  }
  return true;
  console.log("Tract_nums are sorted!")
}
