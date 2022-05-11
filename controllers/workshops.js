// Handles /api/workshops/*
const Workshop = require( 'mongoose' ).model( 'Workshop' );

function getWorkshops(req, res, next) {
    Workshop
        .find()
        .exec(( error, items ) => {
            if( error ) {
                error.status = 500;
                return next( error );
            }

            res.json( items );
        });
};

module.exports = {
    getWorkshops
};