/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             sphinx-js is freely distributable.
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

import Authenticate from './Authenticate';

/**
 * Sphinx encapsulates the functionality to create various API wrapper objects.
 */
class Sphinx {
   /**
    * Create a new Sphinx.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to Sphinx. If auth is
    *                                  not provided requests will be made unauthenticated
    * @param {string} [apiBase=https://sphinx.bluehack.net] - the base Sphinx API URL
    */
   constructor(auth, apiBase = 'http://sphinx.bluehack.net') {
    // constructor(auth, apiBase = 'http://127.0.0.1:3000') {
      this.__apiBase = apiBase;
      this.__auth = auth || {};
   }

   /**
    * Create a new User wrapper
    * @param {string} [user] - the name of the user to get information about
    *                        leave undefined for the authenticated user
    * @return {User}
    */
   getAuthenticate() {
      return new Authenticate(this.__auth, this.__apiBase);
   }
}

module.exports = Sphinx;
