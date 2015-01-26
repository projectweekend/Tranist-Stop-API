var models = require( "./models" );


exports.getRoutes = function ( req, res ) {

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


exports.getStops = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = models.TransitStop.find( filter ).sort( {
        name: 1,
        route_direction: 1
    } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};


exports.getStopsForDirection = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase(),
        route_direction: req.params.routeDirection.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = models.TransitStop.find( filter ).sort( {
        name: 1
    } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};
