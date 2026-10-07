let x = 10;
console.log(x);
let y;
y = 20;
let str = "meow";
let bool = true;
let arr = [1, 2, 3, 4, 5];
let obj = {
    id: "2993",
    name: "meow",
    cgpa: 3.14,
    getName() {
        return this.name;
    },
};
if (typeof obj.depart === "string")
    console.log(obj === null || obj === void 0 ? void 0 : obj.depart);
let undefinedVal = undefined;
let nullVal = null;
function sum(a, b) {
    if (typeof b === "number")
        return a + b;
    else
        return a;
}
const sub = (a, b) => {
    return a - b;
};
console.log(sum(10));
var days;
(function (days) {
    days[days["sunday"] = 100] = "sunday";
    days[days["monday"] = 101] = "monday";
    days[days["tuesday"] = 102] = "tuesday";
    days[days["wednesday"] = 103] = "wednesday";
    days[days["thursday"] = 104] = "thursday";
    days[days["friday"] = 105] = "friday";
})(days || (days = {}));
console.log("My Working day:" + days.monday);
let myVal;
myVal = 10;
myVal = "meow";
console.log(Math.round(myVal));
let unknownVal;
unknownVal = 10;
unknownVal = "moew";
if (typeof unknownVal === "number")
    console.log(Math.round(unknownVal));
function infiniteLoop() {
    while (true) { }
}
let userInfo = [1, "meow"];
let numberOrStirng = 10;
numberOrStirng = "meow";
let thor = {
    humanAttributes: true,
    superHumanAttributes: true,
};
function getApiValue(a) {
    return a;
}
export {};
//# sourceMappingURL=index.js.map