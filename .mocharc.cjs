"use strict";

module.exports = {
  reporter: 'mocha-junit-reporter',
  reporterOptions: [
    "mochaFile=results/test-results.xml",
    "jenkinsMode=1",
    "testCaseSwitchClassnameAndName=1",
    "outputs=1"
 
  ]
}