// Environment variables
var canvasWidth = 900,
    graphWidth = 400,
    height = 600;

var canvas = d3.select('#holder')
.append('svg')
.attr('width', canvasWidth)
.attr('height', height)
.attr('id', 'mapCanvas');

var graphBlock = d3.select( '#holder' )
.append( 'div' )
.style( 'width', function(){ return '' + graphWidth + 'px'; } )
.style( 'height', function(){ return '' + height + 'px'; })
.style( 'display', 'inline-block' )
.attr( 'id', 'graphBlock' );

var updateGraphs = function( data ) {

    var barWidth = (graphWidth/6 - 5),
        maxBarHeight = 8600,
        chartHeight = 200,
        chartScale = d3.scale.linear()
            .domain([0, graphWidth])
            .range([0, chartHeight])
        ;

    // Clearing start message or old data
    if (graphBlock.text() === 'Click on a state to see more detailed information'){
        graphBlock.selectAll( '*' ).remove();

        graphBlock.append( 'h2' )
        .text(function(){ return data.state + ' Energy Production' })
        .attr( 'class', 'graphTitle' )

        var epGB = graphBlock
        .append( 'svg' )
        .attr( 'width', graphWidth-30 )
        .attr( 'height', 200 )
        .attr( 'x', 15 )
        .attr( 'y', 35 )
        .attr( 'class', 'graphBox')
        .style('stroke', '#777')
        .style('fill', 'none')

        var bars = epGB
        .selectAll( 'g' )
        .data( function(){
            // Need to remove state from the list of keys
            var keys = Object.keys( data );
            keys.splice(keys.indexOf('state'), 1)

            return keys
        } )
        .enter()
        .append( 'g' )
        .attr("transform", function(d, i) { return "translate( " + i * barWidth + ", 0 )"; });

        bars
        .append( 'rect' )
        .attr( 'width', barWidth-1 )
        // .attr( 'height', function(d){console.log(d); console.log(chartScale(data[d])); return chartScale(data[d]); })
        // // .datum( function(d){ return { "state": d.id }; } )
        .transition()
        .duration(2000)
        .attr( 'height', function(d){ return '' + data[d]/maxBarHeight*chartHeight + 'px'; } )
        .attr( 'class', 'graphBar')
        .attr( 'y', function(d){ return chartHeight-data[d]/maxBarHeight*chartHeight-data; })

        return;
    }

}

d3.json('static/StateData/data/MBsStatesRN.json', function( error, usTopo ){
    if (error) { return console.log(error) };

    d3.json('static/StateData/data/energyProduction.json', function( epError, ep ){
        if (epError) { return console.log(epError) };

        var
            land = topojson.feature( usTopo, usTopo.objects.land ),
            states = topojson.feature( usTopo, usTopo.objects.states ),
            projection = d3.geo.albersUsa()
                .scale(1000)
                .translate([canvasWidth / 2, height / 2]),
            paths = d3.geo.path().projection( projection );


    // Choropleth color scale
        var colorScale = d3.scale.linear().domain([0, .25, 1]).range(['#828282', '#DAFFBA', '#92FF32']);
        var count = 0;

    // Creates a layer of states
        canvas.selectAll( '.state' )
        .data( states.features )
        // .datum
        // .data( ep, function(d){ return d.id })
        // var theMap = d3.selectAll("svg path")
           // .datum(function(d) { return {st: d3.select(this).attr("id")}; })
        // theMap.data(data, function(d){ return d.st; });
        .enter().append( 'path')
        .attr( 'd', paths ).attr( 'class', 'state' )
        .datum( function(d){ return { "state": d.id }; } )
        .data( ep, function(d){ return d.state; } )
        .style( 'fill', function(d){

            return colorScale(( d.biofuels + d.othRenews )/( d.coal + d.gas + d.nuclear + d.oil + d.biofuels + d.othRenews ))
        })
        .on("click", function(d){ updateGraphs(d); })
        ;

    // Creates lines between states
        canvas.append( 'path' )
        .datum( topojson.mesh( usTopo, usTopo.objects.states, function( a,b ){return (a !== b); } ))
        .attr( 'd', paths )
        .attr( 'class', 'interState' );


    // Initially displays a message in the graphBlock
        var graphTitleEP = graphBlock
        .append('p')
        .text('Click on a state to see more detailed information')
        .style('line-height', function(){ return ''+ height/2 + 'px'; })
        .style('text-align', 'center    ');

    });
})
//

/*

        // center = d3.geo.centroid( geometries ),
        // projection = d3.geo.albers()
        // .center( [ 0, 50 ] )
        // // .center( center )
        // .rotate( [ 118, 0 ] )
        // .parallels( [ 33, 50 ] )
        // .scale(500)
        // .translate( [ width/2, height/2 ])
        // Mike Bostock's US TopoJSON


    // Adding ID labels for updating IDs
    var path = d3.geo.path()
    .projection(projection)
    .pointRadius(2);

    canvas.selectAll( '.stateLabel' ).data( states.features )
    .enter().append( 'text' )
    .attr( 'class', function(d){ return 'stateLabel d.id'; } ).text( 'yo')
    .attr( 'transform', function(d){
        if ( isNaN(path.centroid(d)[0]) || isNaN(path.centroid(d)[1])){
            console.log("centriod calculation error: ");
            console.log(d);
            return 'translate(-999,-999)'
        }
        return 'translate(' + path.centroid(d) + ')'

    } )
    .attr( 'dy', '.35em' )
    .text( function(d){ return d.id; } )
// //  Creates a single layer for the entire US
//     canvas.append('path')
//     .datum( land )
//     .attr( 'd',  paths )
//     .attr( 'class', 'landMass')
//     ;

*/
