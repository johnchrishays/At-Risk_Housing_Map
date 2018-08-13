var affordable_market_share = require('../static_data/indicators/affordable_market_share.json');
//very similar to set_tracts_style
//for things where the opacity varies according to the array
export function set_tracts_style_gradient(tracts_array, poly_index, color, map){
  var opacity;
  var j = 0;
  for (var i=0; i<affordable_market_share.length; i++){
    while(tracts_array[j].geoid < affordable_market_share[i].geoid){
      j++;
      tracts_array[j]['polys'][poly_index].fillColor = 'gray';
      tracts_array[j]['polys'][poly_index].fillOpacity = .3;
      tracts_array[j]['polys'][poly_index].setMap(map);
    }
    if(affordable_market_share[i].geoid == tracts_array[j].geoid){
      if(affordable_market_share[i].affordable_market_share > 1) opacity = 1; //unfortunately, the PolicyMap statistics do not seem accurate since some values are above 100%
      else opacity = affordable_market_share[i].affordable_market_share;
      tracts_array[j]['polys'][poly_index].fillOpacity = affordable_market_share[i].affordable_market_share;
      tracts_array[j]['polys'][poly_index].fillColor = color;
    }
  }
}

//finds the max value of the "affordable_market_share" property of gradient tracts_array
//useful for later resizing fillOpacity so that the max value is 1
//unfortunately, the PolicyMap statistics do not seem accurate since some values are above 100%. no need to resize
function find_max_gradient_val(gradient_array){
  var max = gradient_array[0].affordable_market_share;
  for (var i in gradient_array){
    console.log(max)
    if(gradient_array[i].affordable_market_share >= max){
      max = gradient_array[i].affordable_market_share;
    }
  }
  return max;
}
