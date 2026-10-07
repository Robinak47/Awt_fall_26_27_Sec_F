import { Cat } from "./Cat";

export class PersianCat extends Cat {
  constructor(
    color: string,
    numberOfLegs: number,
    private breed: string,
  ) {
    super(color, numberOfLegs);
    this.breed = breed;
  }

  set Breed(breed: string) {
    this.breed = breed;
  }

  get Breed(): string {
    return this.breed;
  }

  doMeowMeow(): void {
    console.log("Meow Meow Meow");
  }

  override showDetails(): void {
    console.log(
      `the cat is ${this.color} color and it has ${this.numberOfLegs} legs and the breed of this cat is ${this.breed}`,
    );
  }

  makeSound(): void {
    console.log("I am making sound");
  }
}
