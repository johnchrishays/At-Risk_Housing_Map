import re
def parseLatLngString(raw_coords):
    raw_array = raw_coords.split(" ")
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
    split_tag = "<Placemark>"
    raw_array = txt.split(split_tag)
    raw_array = raw_array[1:] #grab everything after the second split_tag
    #geoid and coordinates regex pattern matching
    geoid_start_tag = '<name>'
    geoid_end_tag = '</name>'
    geoidPattern = re.compile(geoid_start_tag+'.*'+geoid_end_tag)
    coords_start_tag = '</ExtendedData><Polygon><outerBoundaryIs><LinearRing><coordinates>'
    coords_end_tag = '</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>'
    coordsPattern = re.compile(coords_start_tag+'.*'+coords_end_tag)
    json = []
    for i in raw_array:
        geoid = geoidPattern.search(i).group()
        geoid = geoid[len(geoid_start_tag):-1*len(geoid_end_tag)]
        coords = coordsPattern.search(i).group()
        coords = coords[len(coords_start_tag):-1*len(coords_end_tag)]
        coords = parseLatLngString(coords)
        json.append('{"name": "'+geoid+'","coords":['+coords+']}')
    return '[' + ",".join(json) + ']'

kml = open('./IL_counties.kml', 'r').read()
json = open('../IL_counties.json', 'w')
json.write(kmlToJSON(kml))
json.close()
