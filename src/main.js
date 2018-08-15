import {initMap} from '../google_maps/init_map.js'; //brackets needs since not default export https://wesbos.com/javascript-modules/
import * as buttons from '../interactivity/buttons.js';

var NUM_OVERLAYS = 6;
var map = initMap();
buttons.addButtonListeners(map);
export {NUM_OVERLAYS};
