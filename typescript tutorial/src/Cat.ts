export abstract class Cat {
  constructor(
    protected color: string,
    protected numberOfLegs: number,
  ) {}

  set NumberOfLegs(numberOfLegs: number) {
    this.numberOfLegs = numberOfLegs;
  }

  get NumberOfLegs(): number {
    return this.numberOfLegs;
  }

  set Color(color: string) {
    this.color = color;
  }

  get Color(): string {
    return this.color;
  }

  showDetails(): void {
    console.log(
      `the cat is ${this.color} color and it has ${this.numberOfLegs} legs`,
    );
  }

  abstract makeSound(): void;
}
