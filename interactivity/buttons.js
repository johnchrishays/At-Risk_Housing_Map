import {toggle_OZ_visibility} from '../google_maps/set_tracts_style.js';
import {tracts_array} from '../google_maps/init_map.js';

export function toggleButtonVisuals(element, toggle){ //1 = on, 0 = off
  var computedStyle = window.getComputedStyle(element, null); //javascript way to get styles
  var temp_color = computedStyle['backgroundColor']
  element.style.backgroundColor = computedStyle['color'];
  element.style.color = temp_color;
  if(toggle){
    element.style.fontWeight = 'bold';
  }
  if(!toggle){
    element.style.fontWeight = 'normal';
  }
}

export function addButtonListeners(map){
  var elements = document.getElementsByClassName('buttons')
  for(var i = 0; i < elements.length; i++) {
    (function (){
      var element = elements[i];
      var selected = true;
      element.addEventListener("click", function(){
        if(selected){ //then turn visibility off
          toggleButtonVisuals(element, 0);
          if (element.id == 'OZs') toggle_OZ_visibility(tracts_array, null);
          selected = false;
        }
        else{ //then turn visibility on
          toggleButtonVisuals(element, 1);
          if (element.id == 'OZs') toggle_OZ_visibility(tracts_array, map);
          selected = true;
        }
      });
    }()); // this function () thing works using closures. see https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
  }
}
