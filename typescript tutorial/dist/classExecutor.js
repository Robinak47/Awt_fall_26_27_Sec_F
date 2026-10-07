import { Cat } from "./Cat.js";
import { PersianCat } from "./PersianCat.js";
let cat = new Cat("Burgandy", 40);
cat.Color = "baby Pink";
cat.NumberOfLegs = 30;
console.log(cat.Color);
console.log(cat.NumberOfLegs);
cat.showDetails();
let persianCat = new PersianCat("MidNight Black", 50, "south korean");
persianCat.Color = "Morning SunShine";
persianCat.NumberOfLegs = 4;
persianCat.Breed = "Iranian";
persianCat.doMeowMeow();
//# sourceMappingURL=classExecutor.js.map