exports.get = function ( req, res ) {

    res.header( "Content-Type", "text/plain" );
    res.send( "42" );

};
