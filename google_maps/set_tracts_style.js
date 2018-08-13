export function set_tracts_style(tracts_array, tract_nums, poly_index, color, map){
  var j = 0;
  for (var i=0; i<tract_nums.length; i++){
    while(tracts_array[j].geoid < tract_nums[i]) j++;
    if(tract_nums[i] == tracts_array[j].geoid){
      tracts_array[j]['polys'][poly_index].fillOpacity = 0.2;
      tracts_array[j]['polys'][poly_index].fillColor = color;
    }
  }
}


//poly_index = the index of which poly is being referenced given the array system set up in load_census_tracts.js
//color = the color of the tracts
export function toggle_data_visibility(tracts_array, tract_nums, poly_index, color, map){ //map might be null or map
  var j = 0;
  for (var i=0; i<tract_nums.length; i++){
    while(tracts_array[j].geoid < tract_nums[i]) j++;
    if(tract_nums[i] == tracts_array[j].geoid){
      tracts_array[j]['polys'][poly_index].fillColor = color;
      tracts_array[j]['polys'][poly_index].setMap(map);
    }
  }
}
