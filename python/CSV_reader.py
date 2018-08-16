import pandas as pd

def make_QOZ_as_json():
    df = pd.read_excel('../OZs/Designated QOZs.6.14.18.xlsx')
    df = df.rename(columns=df.iloc[3])
    df = df.rename(columns={'Click arrow to filter state\n\nState': 'State'})
    illinois_df = df[df['State']=='Illinois']

    tract_nums = illinois_df.loc[:,'Census Tract Number'].tolist()

    tract_nums = [int(x) for x in tract_nums]

    f = open('../OZs/QAZs.json', 'w')
    f.write(str(tract_nums))
    f.close()

def opportunity_areas_to_json():
    df = pd.read_csv('../static_data/OAs/opportunity_area_tract_designations.csv')
    trimmed_df = df[pd.notna(df['State'])]
    geoids = [int(x) for x in trimmed_df['Census Tract']]
    designations = [str(x) for x in trimmed_df['Opportunity Area Status, 2018.']]
    length = len(geoids)
    text_list = []
    for i in range(length):
        text_list.append('{"geoid":'+str(geoids[i])+',"opportunity_area_status":"'+designations[i]+'"}')
    text = ", ".join(text_list)
    f = open('../static_data/OAs/opportunity_area_tract_designations.json', 'w')
    f.write("[" + text + "]")
    f.close()

def gradient_csv_to_json(input_file, output_file, data_type):
    df = pd.read_csv(input_file)
    trimmed_df = df[pd.notna(df[data_type])]
    geoids = [x for x in trimmed_df['City']]
    ams = [float('%.3g' % (float(x)/100)) for x in trimmed_df[data_type]] #found online as a way to control sig figs
    length = len(geoids)
    text_list = []
    for i in range(length):
        text_list.append('{"geoid":"'+str(geoids[i])+'","val":'+str(ams[i])+'}')
    text = ", ".join(text_list)
    f = open(output_file, 'w')
    f.write("[" + text + "]")
    f.close()

def select_IL_place_names():
    df = pd.read_excel('../static_data/OAs/IHDA_OA_places.xlsx')
    no_tract = df.loc[df['Census Tract (if applicable)'].isnull()]
    place_list = no_tract['Place'].tolist()
    place_list = [i.rstrip() for i in place_list]
    place_list.sort()
    string_list = []
    for i in place_list:
        string_list.append('"' + i + '"')
    string = ','.join(string_list)
    f = open('../static_data/OAs/IDHA_OA_places.json', 'w')
    f.write('[' + string + ']')
    f.close()

def select_OA_census_tracts():
    df = pd.read_excel('../static_data/OAs/IHDA_OA_places.xlsx')
    has_tract = df.loc[df['Census Tract (if applicable)'].notnull()]
    place_list = has_tract['Census Tract (if applicable)'].tolist()
    place_list = [int(i) for i in place_list]
    f = open('../static_data/OAs/IHDA_OA_tract_nums.json', 'w')
    f.write(str(place_list))
    f.close()

#gradient_kml_to_json('../static_data/indicators/travel_time_to_work.csv', '../static_data/indicators/travel_time_to_work.json', 'Mean travel time to work in minutes, according the US Census Bur')
gradient_csv_to_json("../static_data/indicators/affordable_market_share_places.csv", "../static_data/indicators/affordable_market_share_places.json", "Affordable market share, as of 2018.")
