var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitSystemSchema = Schema( {
    name: String,
    system: String
} );

TransitSystemSchema.index( {
    system: 1
} );

exports.TransitSystem = mongoose.model( "transit_systems", TransitSystemSchema );
