var assert = require('assert');
var toy = require('./toy.js')

describe('toy test', function() {

    it('example a', function() {

        let t = new toy(5,5);
        t.place(0,0,toy.north);
        t.move();
        assert.equal(t.report(), "0,1,NORTH");
    });

    it('example b', function() {

        let t = new toy(5,5);
        t.place(0,0,toy.north);
        t.left();
        assert.equal(t.report(), "0,0,WEST");
    });

    it('example c', function() {

        let t = new toy(5,5);
        t.place(1,2,toy.east);
        t.move();
        t.move();
        t.left();
        t.move();
        assert.equal(t.report(), "3,3,NORTH");
    });

    it('4 turns', function() {

        let t = new toy(5,5);
        t.place(0,0,toy.east);
        t.left();
        t.left();
        t.left();
        t.left();
        assert.equal(t.report(), "0,0,EAST");
    });


    it('keep go east', function() {

        let t = new toy(5,5);
        t.place(0,0,toy.east);
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        assert.equal(t.report(), "4,0,EAST");
    });

    it('keep go east and turn left', function() {

        let t = new toy(5,5);
        t.place(0,0,toy.east);
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.move();
        t.left();
        t.move()
        assert.equal(t.report(), "4,1,NORTH");
    });

    it('invalid place', function() {

        let t = new toy(5,5);
        t.place(9,9,"a");
        assert.equal(t.report(), "0,0,NORTH");
    });

});