exports.get = function ( req, res ) {

    res.setHeader( "Content-Type", "text/plain" );
    res.writeHead( 200 );
    res.body( "42" );
    res.end();

};
