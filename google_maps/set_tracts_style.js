export function set_tracts_style(tracts_array, tract_nums, color, map){
  var j = 0;
  for (var i=0; i<tract_nums.length; i++){
    while(tracts_array[j].geoid < tract_nums[i]) j++;
    if(tract_nums[i] == tracts_array[j].geoid){
      tracts_array[j].poly.fillOpacity = 0.2;
      tracts_array[j].poly.fillColor = color;
    }
  }
}

export function toggle_OZ_visibility(tracts_array, tract_nums, color, map){ //map might be null or map
  var j = 0;
  for (var i=0; i<tract_nums.length; i++){
    while(tracts_array[j].geoid < tract_nums[i]) j++;
    if(tract_nums[i] == tracts_array[j].geoid){
      tracts_array[j].poly.fillColor = color;
      tracts_array[j].poly.setMap(map);
    }
  }
}
