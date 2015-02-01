var TransitSystem = require( "./models" ).TransitSystem;


exports.get = function ( req, res ) {

    var sendResponse = function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    };

    if ( typeof req.query.name !== "undefined" ) {

        return TransitSystem.searchByName( req.query.name, sendResponse );

    }

    return TransitSystem.all( sendResponse );

};
