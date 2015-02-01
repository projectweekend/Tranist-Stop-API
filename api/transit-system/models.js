var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitSystemSchema = Schema( {
    name: String,
    system: String
} );

TransitSystemSchema.index( {
    system: 1
} );


TransitSystemSchema.statics.searchByName = function ( name, done ) {

    this.find( { name: new RegExp( name, "i" ) } )
        .select( "name system urls" )
        .sort( { name: 1 } )
        .exec( done );

};


TransitSystemSchema.statics.all = function ( done ) {

    this.find( {} )
        .select( "name system urls" )
        .sort( { name: 1 } )
        .exec( done );

};


exports.TransitSystem = mongoose.model( "transit_systems", TransitSystemSchema );
