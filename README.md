# Map_-_Energy_Production
An interactive map showing energy production by source and state.

v1<br>
Features:<br>
   - Choropleth map reflecting percentage of energy 
   sourced from renewables out of total energy production. Uses a 
   continuous gradient graded relative to all states.<br>
   - Interactive: on click, graphs will appear beside the map in a 
   designated space showing more detailed energy production 
   information ( source: http://www.eia.gov/state/?sid=CA ).<br>
   - Graphs in v1 will include a pie chart showing the relative 
   percentages of different renewable energy sources among all 
   renewable energy production as well as a bar chart comparing 
   energy production sources.<br>

Technology:<br>
   Interface:<br>
      * Angular UI Bootstrap 0.13.0
      * D3 3.5.5
      * TopoJSON
   
   Frontend: Angular 1.3 (not sure that this will actually add anything)<br>
   Backend: Django 1.8<br>
   Data: www.eia.gov (2012)<br>
