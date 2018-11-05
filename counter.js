module.exports = class Counter {
  constructor(startValue, step) {
    this.value = startValue;
    this.step = step;
  }

  increase() {
    this.value = this.value + this.step;
  }

  decrease() {
    this.value = this.value - this.step;
  }

  get() {
    return this.value;
  }
};
