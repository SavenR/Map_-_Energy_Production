# Map_-_Energy_Production
An interactive map showing energy production by source and state.

Map with energy usage stats and graphs
v1

Features:
   - Choropleth map reflecting percentage of energy 
   sourced from renewables out of total energy production. Uses a 
   continuous gradient graded relative to all states.
   - Interactive: on hover, graphs will appear above the map in a 
   designated space showing more detailed energy consumption 
   information ( source: http://www.eia.gov/state/?sid=CA ).
   - Graphs in v1 will include a pie chart showing the relative 
   percentages of different renewable energy sources among all 
   renewable energy production as well as a bar chart comparing 
   all energy production sources.

Technology:
   Interface:
      - Angular UI Bootstrap 0.13.0
      - D3 3.5.5
      - TopoJSON
   
   Frontend:
      - Angular 1.3 (not sure that this will actually add anything) 
   
   Backend:
      - Django 1.8
      
Sources:
   Data:
      - www.eia.gov (2012)
