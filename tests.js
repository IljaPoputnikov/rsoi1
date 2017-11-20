// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');
	
var libs = require('./libs');

// Create a Test Suite
vows.describe('Index by hash').addBatch({
    'Check minimal value 01/01/2010': {
        topic: libs.GetDateHash("01/01/2010"),

        'bo 0 in mounth and still 0 in days - mddY=1010': function (topic) {
            assert.equal (topic, 1010);
        }
    },
    'Check maximal value 31/12/2019': {
        topic: libs.GetDateHash("31/12/2019"),

        'Everything in place mmddY=12319': function (topic) {
            assert.equal (topic, 12319);
        }
    }
}).exportTo(module);