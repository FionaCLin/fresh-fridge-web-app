'use strict';

var _ = require('lodash');
var async = require('async');

module.exports = (opts) => {
  var lib = opts.lib;
  var api = opts.api;

  /**
    Returns one recipe that is bookmarked.
    Not sure if we even need this.
  **/

  api.bookmarks.get = (bookmark_id, done) => {

    let recipe;

    var get = (next) => {
      lib.bookmarks.get(
        bookmark_id,
        (err, res) => {
          if (err) {
            return done(new Error('bookmark doees not exist'));
          }
          recipe = res;
        }
      )
    }

    async.series([
      get
    ], (err) => {
      done(err, recipe);
    });
  };
};
