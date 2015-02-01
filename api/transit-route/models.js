var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitRouteSchema = Schema( {
    system: String,
    id: String,
    name: String,
    type: String,
    directions: [ String ]
} );

TransitRouteSchema.index( {
    system: 1,
    type: 1,
    id: 1
} );

TransitRouteSchema.statics.query = function ( filter, done ) {

    this.find( filter )
        .select( "directions id name type urls" )
        .sort( { type: 1, id: 1 } )
        .exec( done );

};


exports.TransitRoute = mongoose.model( "transit_routes", TransitRouteSchema );
