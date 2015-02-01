var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitStopSchema = Schema ( {
    system: String,
    name: String,
    latitude: Number,
    longitude: Number,
    route_id: String,
    route_name: String,
    route_type: String,
    route_direction: String,
    route_direction_slug: String
} );

TransitStopSchema.index( {
    system: 1,
    route_type: 1,
    route_id: 1,
    route_direction_slug: 1
} );

exports.TransitStop = mongoose.model( "transit_stops", TransitStopSchema );
