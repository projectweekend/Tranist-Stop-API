exports.get = function ( req, res ) {

    res.writeHead( 200, {
        "Content-Type": "text/plain"
    } );
    res.body( "42" );
    res.end();

};
