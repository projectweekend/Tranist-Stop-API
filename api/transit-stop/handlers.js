var TransitStop = require( "./models" ).TransitStop;


exports.getTrain = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    TransitStop.forTrain( filter, function( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};


exports.getBus = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    TransitStop.forBus( filter, function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};


exports.getBusForDirection = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase(),
        route_direction_slug: req.params.routeDirection.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    TransitStop.forBus( filter, function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};
