var TransitRoute = require( "./models" ).TransitRoute;


exports.get = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase()
    };

    if ( typeof req.query.type !== "undefined" ) {
        filter.type = req.query.type.toLowerCase();
    }

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = models.TransitRoute.find( filter ).sort( {
        type: 1,
        id: 1
    } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};
