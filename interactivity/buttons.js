import {toggle_data_visibility} from '../google_maps/set_tracts_style.js';
import {tracts_array} from '../google_maps/init_map.js';
var OZ_tract_nums = require('../shapefiles/OZs/IL_QAZs_tract_nums.json');
var QCT_tract_nums = require('../shapefiles/OAs/IL_QCTs_tract_nums.json');

//switches colors of button when pushed. element = button
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
  var elements = document.getElementsByClassName('buttons') //list of elements incl. OZs...
  for(var i = 0; i < elements.length; i++) {
    (function (){ // this function () thing works using closures. see https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
      var color, whichmap, tract_nums, poly_index;
      var element = elements[i];
      var selected = true;
      element.addEventListener("click", function(){
        if(element.id == 'OZs') {
          tract_nums = OZ_tract_nums;
          color = 'red';
          poly_index = 0;
        }
        else if(element.id == 'OAs') {
          tract_nums = QCT_tract_nums;
          color = 'blue';
          poly_index = 1;
        }
        if(selected){ //then turn visibility off
          whichmap = null;
        }
        else{ //then turn visibility on
          whichmap = map;
        }
        selected = !selected; //important that this line goes before toggleButtonVisuals
        toggleButtonVisuals(element, selected);
        toggle_data_visibility(tracts_array, tract_nums, poly_index, color, whichmap);
      });
    }());
  }
}
