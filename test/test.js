const assert = require('assert');
const testingClass = require("../counter");
console.log(require("../counter"));

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
});