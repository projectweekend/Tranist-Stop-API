var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitStopSchema = Schema ( {
    type: String,
    route: String,
    direction: String,
    name: String,
    latitude: Number,
    longitude: Number,
    system: String
} );


exports.TransitStop = mongoose.model( "TransitStop", TransitStopSchema );
