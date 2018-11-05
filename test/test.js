const assert = require('assert');
const TestingClass = require('../counter');

describe('Test class Counter.', () => {
  describe('Test constructor', () => {
    it("Positive numbers in constructor's arguments", () => {
      const newInstanceClass = new TestingClass(1, 1);
      assert.equal(newInstanceClass.value, 1);
      assert.equal(newInstanceClass.step, 1);
    });

    it("Null in constructor's arguments", () => {
      const newInstanceClass = new TestingClass(0, 0);
      assert.equal(newInstanceClass.value, 0);
      assert.equal(newInstanceClass.step, 0);
    });

    it("Negative numbers in constructor's arguments", () => {
      const newInstanceClass = new TestingClass(-1, -1);
      assert.equal(newInstanceClass.value, -1);
      assert.equal(newInstanceClass.step, -1);
    });
  });

  describe("Test 'increase' method.", () => {
    it("One call 'increase' method with positive pararmeters", () => {
      const newInstanceClass = new TestingClass(1, 1);
      newInstanceClass.increase();
      assert.equal(newInstanceClass.value, 2);
    });

    it("Multiple call 'increase' method with positive pararmeters", () => {
      const newInstanceClass = new TestingClass(2, 2);
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      assert.equal(newInstanceClass.value, 12);
    });

    it("One call 'increase' method with 0 in all parametrs", () => {
      const newInstanceClass = new TestingClass(0, 0);
      newInstanceClass.increase();
      assert.equal(newInstanceClass.value, 0);
    });

    it("Multiple call 'increase' method with step = 0", () => {
      const newInstanceClass = new TestingClass(5, 0);
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      assert.equal(newInstanceClass.value, 5);
    });

    it("Multiple call 'increase' method with  with negative pararmeters", () => {
      const newInstanceClass = new TestingClass(5, -5);
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.increase();
      assert.equal(newInstanceClass.value, -20);
    });
  });

  describe("Test 'decrease' method.", () => {
    it("One call 'decrease' method with positive pararmeters", () => {
      const newInstanceClass = new TestingClass(1, 1);
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, 0);
    });

    it("Multiple call 'decrease' method with positive pararmeters", () => {
      const newInstanceClass = new TestingClass(2, 2);
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, -8);
    });

    it("One call 'decrease' method with 0 in all parametrs", () => {
      const newInstanceClass = new TestingClass(0, 0);
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, 0);
    });

    it("Multiple call 'decrease' method with step = 0", () => {
      const newInstanceClass = new TestingClass(5, 0);
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, 5);
    });

    it("Multiple call 'decrease' method with  with negative pararmeters", () => {
      const newInstanceClass = new TestingClass(5, -5);
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, 30);
    });
  });

  describe("Test 'get' method.", () => {
    it('Call at once after create new instance of class Counter', () => {
      const newInstanceClass = new TestingClass(7, 8);
      assert.equal(newInstanceClass.get(), 7);
    });

    it("Call after using 'increase' method", () => {
      const newInstanceClass = new TestingClass(2, 2);
      newInstanceClass.increase();
      newInstanceClass.increase();
      assert.equal(newInstanceClass.get(), 6);
    });

    it("Call after using 'decrease' method", () => {
      const newInstanceClass = new TestingClass(3, 3);
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.get(), -3);
    });

    it("Multiple call 'get' method in row", () => {
      const newInstanceClass = new TestingClass(5, 0);
      newInstanceClass.decrease();
      newInstanceClass.get();
      newInstanceClass.get();
      newInstanceClass.get();
      assert.equal(newInstanceClass.get(), 5);
    });

    it("Multiple call 'get' method after using another methods", () => {
      const newInstanceClass = new TestingClass(11, 22);
      newInstanceClass.decrease();
      newInstanceClass.increase();
      newInstanceClass.increase();
      newInstanceClass.decrease();
      newInstanceClass.decrease();
      assert.equal(newInstanceClass.value, -11);
    });
  });
});
