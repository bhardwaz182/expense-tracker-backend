const { execSync } = require( 'child_process' );

const { DB_NAME } = process.env;

try {
    execSync( `mongoimport --db ${DB_NAME} --collection workshops --drop --file "${process.cwd()}/data/seed/workshops.json" --jsonArray` );
    console.log( `Imported documents into database ${DB_NAME}` );
} catch( err ) {
    console.log( `Could not import documents into database ${DB_NAME}` );
    console.error( err );
}