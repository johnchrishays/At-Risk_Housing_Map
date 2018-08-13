var OA_tract_designations = require('../static_data/OAs/opportunity_area_tract_designations.json');

export function get_designated_OAs(){
  var OA_tract_nums = [];
  for(var i=0; i<OA_tract_designations.length; i++){
    if(OA_tract_designations[i].opportunity_area_status == "2018 Opportunity Area"){
      OA_tract_nums.push(OA_tract_designations[i].geoid);
    }
  }
  return OA_tract_nums;
}

export function get_designated_proximate_OAs(){
  var proximate_OA_tract_nums = [];
  for(var i=0; i<OA_tract_designations.length; i++){
    if(OA_tract_designations[i].opportunity_area_status != "2018 Opportunity Area"
    && OA_tract_designations[i].opportunity_area_status != 'nan'
    && OA_tract_designations[i].opportunity_area_status != 'Not an Opportunity Area'){
      proximate_OA_tract_nums.push(OA_tract_designations[i].geoid);
    }
  }
  return proximate_OA_tract_nums;
}
