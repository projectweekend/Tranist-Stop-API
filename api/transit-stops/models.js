var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitRouteSchema = Schema( {
    system: String,
    id: String,
    name: String,
    type: String,
    directions: [ String ]
} );

exports.TransitRoute = mongoose.model( "transit_routes", TransitRouteSchema );


var TransitStopSchema = Schema ( {
    system: String,
    name: String,
    latitude: Number,
    longitude: Number,
    route_id: String,
    route_name: String,
    route_type: String,
    route_direction: String
} );

exports.TransitStop = mongoose.model( "transit_stops", TransitStopSchema );
