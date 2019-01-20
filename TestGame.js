var assert = require('assert');
var game = require('./game.js');


describe('game test', function() {

    it('example a', function() {

        let g = new game();

        g.executeCommand("PLACE 0,0,NORTH");
        g.executeCommand("MOVE");
        g.executeCommand("REPORT");
        assert.equal(g.tObject.report(), "0,1,NORTH");
    });
});

