var url = require( "url" );
var restify = require( "restify" );
var mongoose = require( "mongoose" );

var transitSystem = require( "./api/transit-system/handlers" );
var transitRoute = require( "./api/transit-route/handlers" );
var transitStop = require( "./api/transit-stop/handlers" );
var blitz = require( "./api/blitz/handlers" );


mongoose.connect( process.env.MONGO_URL || process.env.DB_1_PORT.replace( "tcp", "mongodb" ) + "/test" );

if ( typeof process.env.API_KEY === "undefined" ) {
    console.log( "API_KEY environment variable not defined." );
    process.exit( 1 );
}

var server = restify.createServer( {
    name: 'Transit-Stop-API',
} );

var blitzURL = "/" + process.env.BLITZ_KEY;

var unsecureRoutes = [ blitzURL ];

// middleware
server.use( restify.queryParser() );
server.use( function ( req, res, next ) {
    if ( unsecureRoutes.indexOf( req.url ) === -1 ) {
        if ( req.header( "API_KEY" ) !== process.env.API_KEY ) {
            return res.send( 403, { message: "Invalid API key" } );
        }
    }
    next();
} );


// routes
server.get( "/", transitSystem.get );
server.get( blitzURL, blitz.get );
server.get( "/:transitSystem", transitRoute.get );
server.get( "/:transitSystem/train/:routeId", transitStop.getTrain );
server.get( "/:transitSystem/bus/:routeId", transitStop.getBus );
server.get( "/:transitSystem/bus/:routeId/:routeDirection", transitStop.getBusForDirection );


// run
server.listen( process.env.PORT || 3000 );
