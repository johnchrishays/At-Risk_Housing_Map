export function load_markers(markers, label, map) {
  var markers_array = []; //master array of markers
  for(var i=0; i<markers.length; i++){
    var marker = new google.maps.Marker({
      position: markers[i].loc,
      map: map,
      title: markers[i].name,
      label: label
    });
    markers_array.push(marker);
  }
  return markers_array;
}

export function toggle_markers_visibility(markers_array, map){
  for(var i=0; i<markers_array.length; i++){
    markers_array[i].setMap(map);
  }
}
