export class Cat {
    constructor(color, numberOfLegs) {
        this.color = color;
        this.numberOfLegs = numberOfLegs;
    }
    set NumberOfLegs(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    get NumberOfLegs() {
        return this.numberOfLegs;
    }
    set Color(color) {
        this.color = color;
    }
    get Color() {
        return this.color;
    }
    showDetails() {
        console.log(`the cat is ${this.color} color and it has ${this.numberOfLegs} legs`);
    }
}
//# sourceMappingURL=Cat.js.map