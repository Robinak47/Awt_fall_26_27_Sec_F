let x = 10;
console.log(x);

let y: number;
y = 20;

let str: string = "meow";

let bool: boolean = true;

let arr: number[] = [1, 2, 3, 4, 5];

type Obj = {
  id: string;
  name: string;
  cgpa: number;
  depart?: string;

  getName(): string;
};
let obj: Obj = {
  id: "2993",
  name: "meow",
  cgpa: 3.14,

  getName() {
    return this.name;
  },
};

if (typeof obj.depart === "string") console.log(obj?.depart);

let undefinedVal: undefined = undefined;

let nullVal: null = null;

function sum(a: number, b?: number): number {
  if (typeof b === "number") return a + b;
  else return a;
}

const sub = (a: number, b: number): number => {
  return a - b;
};

console.log(sum(10));

enum days {
  sunday = 100,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
}

console.log("My Working day:" + days.monday);

let myVal: any;
myVal = 10;
myVal = "meow";

console.log(Math.round(myVal));

let unknownVal: unknown;

unknownVal = 10;
unknownVal = "moew";

if (typeof unknownVal === "number") console.log(Math.round(unknownVal));

function infiniteLoop(): never {
  while (true) {}
}

let userInfo: [number, string] = [1, "meow"];

let numberOrStirng: number | string = 10;
numberOrStirng = "meow";

type Human = {
  humanAttributes: boolean;
};

type SuperHuman = {
  superHumanAttributes: boolean;
};

type Avenger = Human & SuperHuman;

let thor: Avenger = {
  humanAttributes: true,
  superHumanAttributes: true,
};

function getApiValue(a: number | string): number | string {
  return a;
}
