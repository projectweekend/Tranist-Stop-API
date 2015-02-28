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

TransitStopSchema.statics.forTrain = function ( filter, done ) {

    filter.route_type = "train";

    this.find( filter )
        .select( "name latitude longitude system route_direction stop_order" )
        .sort( {
            route_id: 1,
            stop_order: 1
        } )
        .exec( done );

};

TransitStopSchema.statics.forBus = function ( filter, done ) {

    filter.route_type = "bus";

    this.find( filter )
        .select( "name latitude longitude system route_direction" )
        .sort( { name: 1 } )
        .exec( done );

};

exports.TransitStop = mongoose.model( "transit_stops", TransitStopSchema );
