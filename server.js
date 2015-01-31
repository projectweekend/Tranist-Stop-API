var restify = require( "restify" );
var mongoose = require( "mongoose" );
var transitStops = require( "./api/transit-stops/controllers" );
var blitz = require( "./api/blitz/controllers" );


mongoose.connect( process.env.MONGO_URL || process.env.DB_1_PORT.replace( "tcp", "mongodb" ) + "/test" );

if ( typeof process.env.API_KEY === "undefined" ) {
    console.log( "API_KEY environment variable not defined." );
    process.exit( 1 );
}


var server = restify.createServer( {
    name: 'Transit-Stop-API',
} );


// middleware
server.use( restify.queryParser() );
server.use( function ( req, res, next ) {
    if ( req.header( "API_KEY" ) !== process.env.API_KEY ) {
        return res.send( 403, { message: "Invalid API key" } );
    }
    next();
} );


// routes
server.get( "/", transitStops.getSystems );
server.get( "/mu-1234-cafe-5678-babe", blitz.get );
server.get( "/:transitSystem", transitStops.getRoutes );
server.get( "/:transitSystem/train/:routeId", transitStops.getTrainStops );
server.get( "/:transitSystem/bus/:routeId", transitStops.getBusStops );
server.get( "/:transitSystem/bus/:routeId/:routeDirection", transitStops.getBusStopsForDirection );


// run
server.listen( process.env.PORT || 3000 );
