/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             sphinx-js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('sphinx:authenticate');

/**
 * An Authenticate allows scoping of API requests to a particular Sphinx authentication.
 */
class Authenticate extends Requestable {
   /**
    * Create a Schedule.
    * @param {Requestable.auth} [auth] - information required to authenticate to Sphinx
    * @param {string} [apiBase=https://sphinx.bluehack.net] - the base Sphinx API URL
    */
   constructor(auth, apiBase) {
      super(auth, apiBase);
   }

   /**
    * Autheiticate for OAuth provider
    * @param {string} [provider]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   authenticate(provider, options, cb) {
      return this._request('GET', `/${provider}`, options, cb);
   }
}

module.exports = Authenticate;
