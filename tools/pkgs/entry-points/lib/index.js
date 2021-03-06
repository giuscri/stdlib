'use strict';

/**
* Resolve package entry points.
*
* @module @stdlib/tools/pkgs/entry-points
*
* @example
* var entryPoints = require( '@stdlib/tools/pkgs/entry-points' );
*
* var pkgs = [ '/foo/bar' ];
*
* entryPoints( pkgs, clbk );
*
* function clbk( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*
* @example
* var entryPoints = require( '@stdlib/tools/pkgs/entry-points' );
*
* var pkgs = [ '/foo/bar' ];
*
* var entries = entryPoints.sync( pkgs );
* // returns [{...}]
*/

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var entryPoints = require( './async.js' );
var sync = require( './sync.js' );


// MAIN //

setReadOnly( entryPoints, 'sync', sync );


// EXPORTS //

module.exports = entryPoints;

