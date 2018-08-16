import requests
import json
from bs4 import BeautifulSoup
import googlemaps
import time

gmaps = googlemaps.Client(key='AIzaSyCyrmwp4y-3RfRBC6gO3bcRirYr1BwcJb8')

headers = {'User-Agent':'Mozilla/5.0'}

class Entry:
    def __init__(self, name, link, address, lat, lng):
        self.name = name
        self.link = link
        self.address = address
        self.lat = lat
        self.lng = lng

#returns a list of all census tracts
#year=year that the allocation happened
def extract_hospitals():
    hospital_list = []
    url='https://www.team-iha.org/member-resources/hospital-directory#tabs-horizontal1'
    page = requests.get(url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    rows = soup.find_all(class_="col md-4") #table elements
    for r in rows:
        #print(r)
        div = r.find("a")
        name = div.text
        link = div.link
        p = r.find("p").text
        address = p[:p.find('(')].strip()
        g = gmaps.geocode(address)
        count = 0
        while(not g and count < 5):
            time.sleep(3)
            g = gmaps.geocode(address)
            count += 1
        if (g):
            print(address, g[0]['geometry']['location']['lat'], g[0]['geometry']['location']['lng'])
            entry = Entry(name, link, address, g[0]['geometry']['location']['lat'], g[0]['geometry']['location']['lng'])
            hospital_list.append(entry)
    return hospital_list

def hospitals_to_JSON(entries):
    text_list = []
    for entry in entries:
        tmp = '{"name":"' + entry.name + '","loc":{"lat":' + str(entry.lat) + ',"lng":' + str(entry.lng) + '}}'
        print(tmp)
        text_list.append(tmp)
    text = ','.join(text_list)
    return '[' + text + ']'


f = open('../static_data/indicators/IL_hospitals.json', 'w')
f.write(hospitals_to_JSON(extract_hospitals()))
f.close()
