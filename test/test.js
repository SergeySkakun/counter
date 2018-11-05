const assert = require('assert');
const testingClass = require("../counter");

describe("Test class Counter.", function() {
    describe("Test constructor", function(){
        it("Positive numbers in constructor's arguments", function() {
            let newInstanceClass = new testingClass(1, 1);
            assert.equal(newInstanceClass.value, 1);
            assert.equal(newInstanceClass.step, 1);
        });

        it("Null in constructor's arguments", function() {
            let newInstanceClass = new testingClass(0, 0);
            assert.equal(newInstanceClass.value, 0);
            assert.equal(newInstanceClass.step, 0);
        });

        it("Negative numbers in constructor's arguments", function() {
            let newInstanceClass = new testingClass(-1, -1);
            assert.equal(newInstanceClass.value, -1);
            assert.equal(newInstanceClass.step, -1);
        });
    });

    describe("Test 'increase' method.", function() {
        it("One call 'increase' method with positive pararmeters", function() {
            let newInstanceClass = new testingClass(1, 1);
            newInstanceClass.increase();
            assert.equal(newInstanceClass.value, 2);
        });

        it("Multiple call 'increase' method with positive pararmeters", function() {
            let newInstanceClass = new testingClass(2, 2);
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            assert.equal(newInstanceClass.value, 12);
        });

        it("One call 'increase' method with 0 in all parametrs", function() {
            let newInstanceClass = new testingClass(0, 0);
            newInstanceClass.increase();
            assert.equal(newInstanceClass.value, 0);
        });

        it("Multiple call 'increase' method with step = 0", function() {
            let newInstanceClass = new testingClass(5, 0);
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            assert.equal(newInstanceClass.value, 5);
        });

        it("Multiple call 'increase' method with  with negative pararmeters", function() {
            let newInstanceClass = new testingClass(5, -5);
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            newInstanceClass.increase();
            assert.equal(newInstanceClass.value, -20);
        });
    });

    describe("Test 'decrease' method.", function() {
        it("One call 'decrease' method with positive pararmeters", function() {
            let newInstanceClass = new testingClass(1, 1);
            newInstanceClass.decrease();
            assert.equal(newInstanceClass.value, 0);
        });

        it("Multiple call 'decrease' method with positive pararmeters", function() {
            let newInstanceClass = new testingClass(2, 2);
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            assert.equal(newInstanceClass.value, -8);
        });

        it("One call 'decrease' method with 0 in all parametrs", function() {
            let newInstanceClass = new testingClass(0, 0);
            newInstanceClass.decrease();
            assert.equal(newInstanceClass.value, 0);
        });

        it("Multiple call 'decrease' method with step = 0", function() {
            let newInstanceClass = new testingClass(5, 0);
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            assert.equal(newInstanceClass.value, 5);
        });

        it("Multiple call 'decrease' method with  with negative pararmeters", function() {
            let newInstanceClass = new testingClass(5, -5);
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            newInstanceClass.decrease();
            assert.equal(newInstanceClass.value, 30);
        });
    });
});