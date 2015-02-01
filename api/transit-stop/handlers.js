var TransitStop = require( "./models" ).TransitStop;


exports.getTrain = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase(),
        route_type: "train"
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = TransitStop.find( filter ).sort( {
        name: 1
    } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};


exports.getBus = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase(),
        route_type: "bus"
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = TransitStop.find( filter ).sort( {
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


exports.getBusForDirection = function ( req, res ) {

    var filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase(),
        route_direction: req.params.routeDirection.toLowerCase(),
        route_type: "bus"
    };

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = TransitStop.find( filter ).sort( {
        name: 1
    } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};
