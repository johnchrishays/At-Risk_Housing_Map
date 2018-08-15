//sets the text of the legend
//poly_index = which type of data I am trying to select
export function create_legend(poly_index, map){
  var legend = document.createElement('div');
  legend.setAttribute("id", "legend");
  document.body.append(legend);
  legend.innerHTML = '<h3>Legend</h3>';
  switch(poly_index){
    case 2:
      create_swatches();
      break;
  }
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
}

export function destroy_legend(){
  map.controls[google.maps.ControlPosition.RIGHT_TOP].pop();
}

//helper function for poly_index=5
function create_swatches(){
  for (var i=0; i<5; i++) {
    var name = String(i*20)+"%";
    var div = document.createElement('div');
    div.innerHTML = '<div id="swatch' + String(i) + '" class="swatch"></div>' + name + '<br>';
    legend.appendChild(div);
    var swatch = document.getElementById('swatch'+String(i))
    swatch.style.opacity = i/5;
  }
  div = document.createElement('div');
  div.innerHTML = '<div id="swatch5" class="swatch"></div>Geography not Qualified<br>';
  legend.appendChild(div);
  swatch = document.getElementById('swatch5')
  swatch.style.background = 'gray';
  swatch.style.opacity = .3;
}
