def parseLatLngString(raw_coords):
    raw_array = raw_coords.split(" ")
    coords = []
    for i in raw_array:
        xy = i.split(",")
        x = str(xy[0])
        y = str(xy[1])
        coords.append("{"+"lat: "+y+", lng: "+x+"}")
    txt = ', \n'.join(coords)
    return txt

def extractCounty(txt, county_name):
    txt = txt[txt.find(county_name):]
    txt = txt[txt.find("ExtendedData><Polygon><outerBoundaryIs><LinearRing><coordinates>") + len("ExtendedData><Polygon><outerBoundaryIs><LinearRing><coordinates>"):]
    txt = txt[:txt.find("</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>")]
    return txt

txt = open("IL_counties.txt", "r")
raw_coords = extractCounty(txt.read(), "Lake")
print(parseLatLngString(raw_coords))
