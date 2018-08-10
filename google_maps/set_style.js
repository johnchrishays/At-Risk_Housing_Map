var tract_nums = require('../shapefiles/OZs/IL_QAZs_tract_nums.json');

export default function set_style(tracts_array, map){
  for (var i=0; i<tract_nums.length; i++){
    var j = 0;
    while(tracts_array[j].geoid < tract_nums[i]){
        j++;
        if(j>= tracts_array.length){
          console.log("Index out of range: j");
        }
    }
    if(tract_nums[i] == tracts_array[j].geoid){
      tracts_array[j]['poly'].fillColor = 'red';
      tracts_array[j]['poly'].fillOpacity = .4;
      tracts_array[j]['poly'].strokeWeight = .1;
    }
    else {
      console.log("Could not find census tract: " + i);
    }
  }
}
