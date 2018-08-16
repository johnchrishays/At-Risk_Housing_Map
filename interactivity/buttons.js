import {toggle_data_visibility} from '../google_maps/set_tracts_style.js';
import {toggle_data_visibility_places} from '../google_maps/set_places_style.js';
import {tracts_array, OA_places_array, travel_time_places_array, affordable_market_share_places_array, hospitals_array} from '../google_maps/init_map.js';
import {create_legend, destroy_legend} from "./legend.js";
import {toggle_markers_visibility} from "../google_maps/load_markers.js"

//switches colors of button when pushed. element = button
export function toggleButtonVisuals(element, toggle){ //1 = on, 0 = off
  var computedStyle = window.getComputedStyle(element, null); //javascript way to get styles
  var temp_color = computedStyle['backgroundColor']
  element.style.backgroundColor = computedStyle['color'];
  element.style.color = temp_color;
  if(toggle) element.style.fontWeight = 'bold';
  if(!toggle) element.style.fontWeight = 'normal';
}

export function addButtonListeners(map){
  var transit_layer = new google.maps.TransitLayer();
  var affordable_market_share_tract_nums = [] //necessary since affordable_market_share is an array of objects (incl. gradient vals) not just an array of strings
  for (var i=0; i<affordable_market_share.length; i++) affordable_market_share_tract_nums.push(affordable_market_share[i].geoid);

  var elements = document.getElementsByClassName('buttons') //list of elements incl. OZs...
  for(var i = 0; i < elements.length; i++) {
    (function (){ // this function () thing works using closures. see https://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values
      var color, whichmap, poly_index;
      var transit = null;
      var element = elements[i];
      var selected = false;
      element.addEventListener("click", function(){
        if(selected) whichmap = null;//then turn visibility off
        else whichmap = map; //then turn visibility on
        switch(element.id){
          case 'OZs':
            poly_index = 0;
            break;
          case 'QCTs':
            poly_index = 1;
            break;
          case 'affordable_market_share':
            poly_index = 2;
            if(!selected) create_legend(poly_index, map);
            else destroy_legend(map);
            toggle_data_visibility_places(affordable_market_share_places_array, whichmap);
            break;
          case 'OAs':
            poly_index = 3;
            toggle_data_visibility_places(OA_places_array, whichmap);
            break;
          case 'transit':
            transit = transit_layer;
            poly_index = 4;
            break;
          case 'travel_time':
            poly_index = 5;
            toggle_data_visibility_places(travel_time_places_array, whichmap);
            if(!selected) create_legend(poly_index, map);
            else destroy_legend(map);
            break;
          case 'hospitals':
            poly_index = 6;
            toggle_markers_visibility(hospitals_array, whichmap);
            break;
        }
        selected = !selected; //important that this line goes before toggleButtonVisuals
        toggleButtonVisuals(element, selected);
        toggle_data_visibility(tracts_array, poly_index, whichmap, transit);
      });
    }());
  }
}
