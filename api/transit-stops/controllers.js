var models = require( "./models" );


exports.test = function ( req, res ) {

    var q = models.TransitStop.find( {} ).limit( 20 );
    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};
