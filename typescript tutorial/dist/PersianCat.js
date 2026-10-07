import { Cat } from "./Cat.js";
export class PersianCat extends Cat {
    constructor(color, numberOfLegs, breed) {
        super(color, numberOfLegs);
        this.breed = breed;
        this.breed = breed;
    }
    set Breed(breed) {
        this.breed = breed;
    }
    get Breed() {
        return this.breed;
    }
    doMeowMeow() {
        console.log("Meow Meow Meow");
    }
}
//# sourceMappingURL=PersianCat.js.map