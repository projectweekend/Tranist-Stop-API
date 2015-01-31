exports.get = function ( req, res ) {

    res.writeHead( 200, {
        "Content-Type": "text/plain"
    } );

    return res.send( 200, "42" );
};
