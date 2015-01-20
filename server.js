var restify = require( "restify" );
var mongoose = require( "mongoose" );
var transitStops = require( "./api/transit-stops/controllers" );


mongoose.connect( process.env.MONGO_URL || process.env.DB_1_PORT.replace( "tcp", "mongodb" ) + "/test" );


var server = restify.createServer( {
    name: 'Transit-Stop-API',
} );


server.get( "/", transitStops.test );


server.listen( process.env.PORT || 3000 );
