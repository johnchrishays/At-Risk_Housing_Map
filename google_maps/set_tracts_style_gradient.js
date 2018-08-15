//very similar to set_tracts_style
//for things where the opacity varies according to the array
export function set_tracts_style_gradient(tracts_array, gradient_array, poly_index, color, max_val, min_val, map){
  var opacity;
  var j = 0;
  for (var i=0; i<gradient_array.length; i++){
    while(tracts_array[j].geoid < gradient_array[i].geoid){
      j++;
      tracts_array[j]['polys'][poly_index].fillColor = 'gray';
      tracts_array[j]['polys'][poly_index].fillOpacity = .3;
      tracts_array[j]['polys'][poly_index].setMap(map);
    }
    if(gradient_array[i].geoid == tracts_array[j].geoid){
      if(gradient_array[i].val > max_val) opacity = 1; //unfortunately, the PolicyMap statistics do not seem accurate since some values are above 100%
      else if(gradient_array[i].val < min_val) opacity = 0;
      else opacity = (gradient_array[i].val - min_val) / (max_val - min_val);
      tracts_array[j]['polys'][poly_index].fillOpacity = opacity;
      tracts_array[j]['polys'][poly_index].fillColor = color;
    }
  }
}

//finds the max value of the "gradient_array" property of gradient tracts_array
//useful for later resizing fillOpacity so that the max value is 1
export function find_max_gradient_val(gradient_array){
  var max = gradient_array[0].val;
  for (var i in gradient_array){
    if(gradient_array[i].val > max){
      max = gradient_array[i].val;
    }
  }
  console.log(max)
  return max;
}

//finds the min value of the "gradient_array" property of gradient tracts_array
//useful for later resizing fillOpacity to create contrast
export function find_min_gradient_val(gradient_array){
  var min = gradient_array[0].val;
  for (var i in gradient_array){
    if(gradient_array[i].val < min){
      min = gradient_array[i].val;
    }
  }
  console.log(min)
  return min;
}
