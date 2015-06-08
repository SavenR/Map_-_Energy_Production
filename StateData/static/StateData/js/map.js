// Environment variables
var canvasWidth = 900,
    graphWidth = 400,
    height = 600;

var canvas = d3.select('#mapHolder')
.append('svg')
.attr('width', canvasWidth)
.attr('height', height)
.attr('id', 'mapCanvas');

var graphBlock = d3.select('#mapHolder')
.append('svg')
.attr('width', graphWidth)
.attr('height', height)
.attr('id', 'graphBlock');

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
        var colorScale = d3.scale.linear().domain([0, .25, 1]).range(['#61754E', '#DAFFBA', '#92FF32']);
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
        .on("click", function(d){ console.log(d); })
        ;

    // Creates lines between states
        canvas.append( 'path' )
        .datum( topojson.mesh( usTopo, usTopo.objects.states, function( a,b ){return (a !== b); } ))
        .attr( 'd', paths )
        .attr( 'class', 'interState' )


    // Creates an area for graphs


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
