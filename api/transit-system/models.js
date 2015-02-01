var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitSystemSchema = Schema( {
    name: String,
    system: String
} );

exports.TransitSystem = mongoose.model( "transit_systems", TransitSystemSchema );
