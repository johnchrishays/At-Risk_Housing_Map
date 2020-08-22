A document to explain technical aspects of how to use the tool and how it was made.

# How to use it
To open the tool, double click /dist/index.html or drag the file to your browser. Alternately, you can go to: https://mhl-at-risk-housing.000webhostapp.com (update: now archived). Click on the buttons labeled "Opportunity Zones", etc. to view the data. Explanations of the definitions of each of the datatypes are in the REPORT.md file. If you are looking for the original data, go to the relevant folder in /static_data/. You can also see links to my sources in the SOURCE.md file in /static_data/.

# Directory Organization
* *dist:* Directory with top-level html and bundle.js files.
* *node_modules:* I used npm to import modules. This folder has those modules and dependencies.
* *google_maps:* This folder contains javascript files related to making the map work.
* *shapefiles:* This folder contains the shapefiles (.JSON, .kml, etc.) used to create boundaries on the map.
* *python:* This folder contains python files related to web-scraping the data or translating various files to JSON.
* *src:* This folder contains main.js, the main javascript file.
* *static_data:* This folder contains the data for the overlays on the map.
* *REPORT.md:* This contains my findings and use specifications from the project.

# Developer Notes
* I used webpack to bundle my modules. Most of the time I used `npm run develop` or `npm run build` to call webpack. Look at package.json or webpack.config.js if you are curious.
