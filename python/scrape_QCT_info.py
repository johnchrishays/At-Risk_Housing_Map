import requests
from bs4 import BeautifulSoup

headers = {'User-Agent':'Mozilla/5.0'}

#returns a list of all census tracts
#year=year that the allocation happened
def extract_tracts(year):
    url='https://qct.huduser.gov/tables/1statetable.odb?statefp=17.0&DDAYEAR='+str(year)
    tract_list = []
    page = requests.get(url, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')
    rows = soup.find_all("tr") #table row tag in html
    for r in rows:
        cells = r.find_all("td") #table cell tag in html
        for c in cells:
            link = c.find("a")
            if(link):
                tract_list.append(int(link['href'][-11:]))
    return tract_list

tracts = open('../static_data/QCTs/IL_QCTs_tract_nums.json', 'w')
tracts.write(str(extract_tracts(2018)))
tracts.close()
