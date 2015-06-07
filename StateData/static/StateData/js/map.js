// Environment variables
var width = 900,
    height = 600;

var canvas = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height)
.attr('id', 'mapCanvas');

d3.json('static/StateData/data/MBsStatesRN.json', function( error, json ){
    if (error) { return console.log(error) };

    var
        land = topojson.feature( json, json.objects.land ),
        states = topojson.feature( json, json.objects.states ),
        projection = d3.geo.albersUsa()
            .scale(1000)
            .translate([width / 2, height / 2]),
        paths = d3.geo.path().projection( projection );


//  Creates a single layer for the entire US
    canvas.append('path')
    .datum( land )
    .attr( 'd',  paths )
    .attr( 'class', 'landMass')
    ;

// Creates a layer of states
    canvas.selectAll( '.state' ).data( states.features )
    .enter().append( 'path')
    .attr( 'd', paths ).attr( 'class', 'state' )
    ;



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

*/