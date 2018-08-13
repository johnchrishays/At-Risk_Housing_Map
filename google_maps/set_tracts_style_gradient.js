var affordable_market_share = require('../shapefiles/indicators/affordable_market_share.json');
//very similar to set_tracts_style, might combine later if I have time
//for things where the opacity varies according to the array
export function set_tracts_style_gradient(tracts_array, poly_index, color, map){
  var j = 0;
  var max_gradient_val = find_max_gradient_val(affordable_market_share);
  for (var i=0; i<affordable_market_share.length; i++){
    while(tracts_array[j].geoid < affordable_market_share[i].geoid) j++;
    if(affordable_market_share[i].geoid == tracts_array[j].geoid){
      tracts_array[j]['polys'][poly_index].fillOpacity = affordable_market_share[i].affordable_market_share / max_gradient_val;
      tracts_array[j]['polys'][poly_index].fillColor = color;
    }
  }
}

function find_max_gradient_val(gradient_array){
  var max = gradient_array[0].affordable_market_share;
  for (var i in gradient_array){
    if(gradient_array[i].affordable_market_share >= max){
      max = gradient_array[i].affordable_market_share;
    }
  }
  return max;
}
