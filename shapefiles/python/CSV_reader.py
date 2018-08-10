import pandas as pd

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
