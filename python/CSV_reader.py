import pandas as pd

def make_QOZ_as_json():
    df = pd.read_excel('../OZs/Designated QOZs.6.14.18.xlsx')
    df = df.rename(columns=df.iloc[3])
    df = df.rename(columns={'Click arrow to filter state\n\nState': 'State'})
    illinois_df = df[df['State']=='Illinois']
    #lic_df = illinois_df[df['Tract Type'] == 'Low-Income Community']
    #adjacent_df = illinois_df[df['Tract Type'] == 'Non-LIC Contiguous']

    tract_nums = illinois_df.loc[:,'Census Tract Number'].tolist()
    #lic_tract_nums = lic_df.loc[:,'Census Tract Number'].tolist()
    #adjacent_tract_nums = adjacent_df.loc[:,'Census Tract Number'].tolist()

    tract_nums = [int(x) for x in tract_nums]
    #lic_tract_nums = [int(x) for x in lic_tract_nums]
    #adjacent_tract_nums = [int(x) for x in adjacent_tract_nums]

    f = open('../OZs/QAZs.json', 'w')
    f.write(str(tract_nums))
    f.close()

def affordable_market_share_to_json():
    df = pd.read_csv('../shapefiles/indicators/affordable_market_share.csv')
    trimmed_df = df[pd.notna(df['Affordable market share, as of 2018.'])]
    geoids = [int(x) for x in trimmed_df['Census Tract']]
    ams = [float('%.3g' % (float(x) / 100)) for x in trimmed_df['Affordable market share, as of 2018.']] #found online as a way to control sig figs
    length = len(geoids)
    text_list = []
    for i in range(length):
        text_list.append('{"geoid":'+str(geoids[i])+',"affordable_market_share":'+str(ams[i])+'}')
    text = ", ".join(text_list)
    f = open('../shapefiles/indicators/affordable_market_share.json', 'w')
    f.write("[" + text + "]")
    f.close()

affordable_market_share_to_json()
