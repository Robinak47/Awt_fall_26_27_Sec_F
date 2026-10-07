import { Cat } from "./Cat";
import { PersianCat } from "./PersianCat";

// let cat: Cat = new Cat("Burgandy", 40);

// cat.Color = "baby Pink";
// cat.NumberOfLegs = 30;

// console.log(cat.Color);
// console.log(cat.NumberOfLegs);
// cat.showDetails();

let persianCat: PersianCat = new PersianCat(
  "MidNight Black",
  50,
  "south korean",
);

persianCat.Color = "Morning SunShine";
persianCat.NumberOfLegs = 4;
persianCat.Breed = "Iranian";

persianCat.doMeowMeow();
