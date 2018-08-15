import re
#from CSV_reader import select_IL_place_names

def parseLatLngString(raw_coords):
    raw_array = raw_coords.split(",0.0 ")
    coords = []
    for i in raw_array:
        xy = i.split(",")
        x = str(xy[0])
        y = str(xy[1])
        coords.append("{"+'"lat": '+y+', "lng": '+x+"}")
    txt = ','.join(coords)
    return txt

def extractCounty(txt, county_name):
    txt = txt[txt.find(county_name):]
    txt = txt[txt.find("ExtendedData><Polygon><outerBoundaryIs><LinearRing><coordinates>") + len("ExtendedData><Polygon><outerBoundaryIs><LinearRing><coordinates>"):]
    txt = txt[:txt.find("</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>")]
    return txt

def extractCityBorders(txt):
    txt = txt[txt.find("MULTIPOLYGON (((") + len("MULTIPOLYGON ((("):]
    txt = txt[:txt.find(")))")]
    return txt

def kmlToJSON(txt):
    split_tag = '<Placemark id="cb_2017_17_place_500k.kml">'
    raw_array = txt.split(split_tag)
    raw_array = raw_array[1:] #grab everything after the second split_tag
    #geoid and coordinates regex pattern matching
    geoid_start_tag = '<SimpleData name="NAME">'
    geoid_end_tag = '</SimpleData>'
    geoidPattern = re.compile(geoid_start_tag+'.*'+geoid_end_tag)
    coords_start_tag = '<outerBoundaryIs>\n<LinearRing>\n<coordinates>'
    coords_end_tag = '</coordinates>\n</LinearRing>\n</outerBoundaryIs>'
    coordsPattern = re.compile(coords_start_tag+'.*'+coords_end_tag)
    json = []
    for i in raw_array:
        coords_list = []
        geoid = geoidPattern.search(i).group()
        geoid = geoid[len(geoid_start_tag):-1*len(geoid_end_tag)]
        coords_re = coordsPattern.findall(i)
        for coords in coords_re:
            coords = coords[len(coords_start_tag):-1*len(coords_end_tag)]
            coords = parseLatLngString(coords)
            coords_list.append('[' + coords + ']')
        coords_text = ",".join(coords_list)
        json.append('{"name": "'+geoid+'","coords":['+coords_text+']}')
    return '[' + ",".join(json) + ']'

kml = open('../shapefiles/IL_places/IL_places.kml', 'r').read()
f = open('../shapefiles/IL_places/IL_places.json', 'w')
text = kmlToJSON(kml)
f.write(text)
f.close()
