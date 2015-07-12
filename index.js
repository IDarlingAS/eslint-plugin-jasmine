'use strict';

module.exports = {
  rules: {
    'no-focused-tests': require('./lib/rules/no-focused-tests'),
    'no-disabled-tests': require('./lib/rules/no-disabled-tests'),
    'no-suite-dupes': require('./lib/rules/no-suite-dupes')
  },
  rulesConfig: {
    'no-focused-tests': 2,
    'no-disabled-tests': 1,
    'no-suite-dupes': 1
  }
};