var TransitStop = require( "./models" ).TransitStop;


var BaseHandler = function ( req, res ) {

    this.filter = {
        system: req.params.transitSystem.toLowerCase(),
        route_id: req.params.routeId.toLowerCase()
    };

    if ( typeof req.query.name !== "undefined" ) {
        this.filter.name = new RegExp( req.query.name, "i" );
    }

    return this.getData( filter, this.sendResponse );

};

BaseHandler.prototype.getData = function ( filter, done ) {

};

BaseHandler.prototype.sendResponse = function( err, results ) {

    if ( err ) {
        return res.send( 500, { message: "Database error" } );
    }

    return res.send( 200, results );

};


var TrainHandler = function ( req, res ) {

    BaseHandler.call( this, req, res );

};

TrainHandler.prototype = Object.create( BaseHandler.prototype );
TrainHandler.prototype.constructor = TrainHandler;
TrainHandler.prototype.getData = function ( filter, done ) {

    TransitStop.forTrain( filter, done );

};



exports.getTrain = new TrainHandler( req, res );


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
