import {toggle_data_visibility} from '../google_maps/set_tracts_style.js';
import {tracts_array} from '../google_maps/init_map.js';
var OZ_tract_nums = require('../shapefiles/OZs/IL_QAZs_tract_nums.json');
var QCT_tract_nums = require('../shapefiles/OAs/IL_QCTs_tract_nums.json');
var affordable_market_share = require('../shapefiles/indicators/affordable_market_share.json');


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

  var affordable_market_share_tract_nums = [] //necessary since affordable_market_share is an array of objects (incl. gradient vals) not just an array of strings
  for (var i=0; i<affordable_market_share.length; i++) {
    affordable_market_share_tract_nums.push(affordable_market_share[i].geoid);
  }
  
  var elements = document.getElementsByClassName('buttons') //list of elements incl. OZs...
  for(var i = 0; i < elements.length; i++) {
    (function (){ // this function () thing works using closures. see https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
      var color, whichmap, tract_nums, poly_index;
      var element = elements[i];
      var selected = true;
      element.addEventListener("click", function(){
        switch(element.id){
          case 'OZs':
            tract_nums = OZ_tract_nums;
            color = 'red';
            poly_index = 0;
            break;
          case 'OAs':
            tract_nums = QCT_tract_nums;
            color = 'blue';
            poly_index = 1;
            break;
          case 'affordable_market_share':
            tract_nums = affordable_market_share_tract_nums;
            color = 'orange';
            poly_index = 2;
            break;
        }
        if(selected) whichmap = null;//then turn visibility off
        else whichmap = map; //then turn visibility on

        selected = !selected; //important that this line goes before toggleButtonVisuals
        toggleButtonVisuals(element, selected);
        toggle_data_visibility(tracts_array, tract_nums, poly_index, color, whichmap);
      });
    }());
  }
}
