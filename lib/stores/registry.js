"use strict";

/* eslint-disable no-use-before-define */
function regg() {
  var registry = {};
  var self = {
    register: register,
    list: list,
    get: get
  };
  /**
   * Registers a entry and make it read only
   * @param {String} name To get the entry by
   * @param {Object} entry What you want to register
   */

  function register(name, entry) {
    if (!name) {
      throw new Error('You must provide a valid name for this entry.');
    }

    if (registry[name] !== undefined) {
      throw new Error("'".concat(name, "' already registered"));
    }

    if (!entry) {
      throw new Error("You must provide something to register as '".concat(name, "'"));
    }

    registry[name] = entry;
    return self;
  }

  function get(name) {
    // eslint-disable-next-line no-prototype-builtins
    if (!registry.hasOwnProperty(name)) {
      console.error("No such entry '".concat(name, "'"));
    }

    return registry[name];
  }

  function list() {
    return Object.keys(registry);
  }

  return self;
}

module.exports = regg();