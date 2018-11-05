module.export = class Counter {
    constructor(startValue, step) {
        this.value = startValue;
        this.step = step;
    }

    increase() {
        this.value = this.value + this.step;
    }
};