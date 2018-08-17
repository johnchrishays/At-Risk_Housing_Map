###Chris Hays
###Mercy Housing Lakefront: Resource Development
###Aug. 17th, 2018

#Summary:
This mapping research tool is targeted for the uses of real estate development prospecting and statewide low-income housing analysis. For low-income housing real estate developers, it should provide a sense of where government tax programs overlap and where amenities like medical care or transportation overlap. This should allow the real estate developer to narrow in on particular towns or neighborhoods where development might be most feasible. It is oriented towards at-a-glance research of a broad range of characteristics rather than detailed information about just a few characteristics. All data is updated to August 2018, but as a point-in-time map, the data will not update automatically. For low-income housing researchers and analysts, the tool will provide a geographic picture of how housing indicators like the amount of affordable housing interact with government tax incentive programs. While I am confident that my data is accurate, there may be areas where government data was not collected or where browsers for whatever reason do not render the data. Take the data in this tool with a grain of salt, so if you see something that seems wrong, check with another reputable source. See the README document for instructions on use.

#Research Questions:
* What are the intersections of government low-income community development tax policy and various indicators of quality of life?
* Is there an opportunity for MHL to preserve low-income housing in gentrifying neighborhoods, find amenity-rich, low-income areas where development will be feasible, or foresee gentrification?
* Are there low-income housing shortages in the 2017 Tax Policy Opportunity Zones?
* What publicly accessible indicators of at-risk housing and resource rich areas already exist? What are the key factors that indicate at-risk housing and/or gentrification?
* How do various federal or state development tax policies interact with each other?
* Other indicators worth considering if this tool were to be expanded: large anchor institutions or large employers, # of bedrooms per apartment (for re-entry mothers) or avg square footage, access to resources like public transportation or IHDA characteristics that go into their QAP 9% tax allocations.

#Description of data types included in the tool:
* Opportunity Zones: Originally introduced in the Investing in Opportunity Act (IIOA), the Opportunity Zones Program was enacted as part of the 2017 tax reform package (Tax Cuts and Jobs Act). The program is designed to drive long-term capital to rural and low-income urban communities throughout the nation, and uses tax incentives to encourage private investment in impact funds.
* Opportunity Areas (OAs): As defined by IHDA, are communities with low poverty, high access to jobs and low concentrations of existing affordable rental housing. OAs are identified annually and retain the designation for at least four years as long as they continue to meet the identification criteria. Locating your project in an OA is a scoring factor in the 2018-2019 QAP. Scattered site projects with at least one site in an OA will receive a pro-rata score based on the proportion of total units located in the OA. Fractional scores will be rounded up to the next whole number.
* Affordable Market Share: The Affordable Market Share is calculated by dividing the total number of rental units financed by IHDA, HUD, and USDA by the estimated number of rental units for that community. If the Affordable Market Share for a place or census tract is above 20%, the Place or Tract does not qualify as an Opportunity Area. IHDA uses a similar Affordable Market Share metric in its Preliminary Project Assessment review of applications. For the PPA, Affordable Market Share is determined on a case-by-case basis and units funded by multiple resources can be backed out to avoid double counting. For this determination, such individualization is impossible and therefore the Affordable Market Share utilized in the Opportunity Area determination may include duplication. Qualifying geographies that are over the thresholds for either of the Concentration Metrics utilized are not considered Opportunity Areas even if they qualify under all the other determination metrics. Data is not shown for places with population under 1,000.
* HUD Qualified Census Tract: A Qualified Census Tract (QCT) is any census tract (or equivalent geographic area defined by the Census Bureau) in which at least 50% of households have an income less than 60% of the Area Median Gross Income (AMGI). HUD has defined 60% of AMGI as 120% of HUD's Very Low Income Limits (VLILs), which are based on 50% of area median family income, adjusted for high cost and low income areas.
* Mean travel time to work: Mean travel time to work is an indication of how long it takes people to get to their jobs. Unlike other indicators of transportation / job access this metric does not presume a need to access public transportation or multiple nodes of travel – though this metric doesn’t discount this type of access either. Eligible geographies must be above or below (as appropriate) a threshold benchmark in ALL Major Determination Metric categories to qualify as Opportunity Areas. Data is not shown for places with population under 1,000.
* IHA Member Hospitals: A pretty good indication of where all the hospitals in IL are. The IHA (Illinois Health and Hospital Association) has member hospitals all over the state.
* USDA Food Desserts: As defined by the USDA, a low access tract at 1 mile for urban areas and 10 miles for rural areas. This does NOT completely align with IHDA guidelines for Opportunity Area scoring, since the city of Chicago has a stricter 0.5 mile radius for what should be considered a food dessert. This will help rule out places that clearly do not fall under IHDA guidelines and is accurate for everywhere except the city of Chicago.

#Background Resources and Reading:
##Housing stock composition:
* Institute for Housing Studies at DePaul University
  * Scale: Chicago Community Areas (which roughly correspond to neighborhoods), Wards or larger scale
  * Timespan: just 2015
  * Data -- https://www.housingstudies.org/dataportal/composition/housing-units-composition/chicago-community-areas/2015/2015/ (seems to come from Assessor’s Office, although I don’t know how they did it)
  * Landing page -- https://www.housingstudies.org/research-publications/publications/composition-cook-countys-housing-market/
##Opportunity Zones:
  * Enterprise Community
  * https://www.enterprisecommunity.org/opportunity360/opportunity-zone-eligibility-tool
* PolicyMap has various different types of searchable software
##Gentrification:
* Institute for Housing Studies at DePaul University
  * Includes property sales data, mortgage data, foreclosure filings data and vacancy data
  * Background + data -- https://www.housingstudies.org/page/ihs-data-projects/
* Partnership Organizations:
  * NowPow list of Chicago Service Providers

#Limitations
* Comprehensiveness: This tool only captures 8 layers of data related to low-income housing development. There are far, far more metrics that I wish I had time to include: large employers, anchor institutions, type of housing, walkability, number of bedrooms per apartment, access to partner community health and advocacy organizations, and many more.
* Updatability: All data included in the map is the most updated data available as of August 2018. As new tax programs are implemented or census tracts and places are re-designated, the map will not update itself.
* Accuracy: In certain browsers, some of the data does not render. I could never figure out why this was the case, but it is safe to say the tool works best in Safari and Firefox.
* Speed: The page usually takes ~10 seconds to load all of the data, which is a result of the large quantity of data included in the tool. Most other mapping tools that I found were not significantly faster than this, but it certainly slows down research if the tool stops working and you have to reload the page.
