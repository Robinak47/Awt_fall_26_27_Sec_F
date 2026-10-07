import { ESum as ISum, doSub, doDiv, doMul } from "./mathModule.js";
import exponse from "./mathModule.js"

console.log("hello Students");

var x = 10;
console.log(x);

let y = 20;
console.log(y);

const pi = 3.1416;
console.log(pi);

//function in js


function sum(a, b) {
    return a + b;

}

console.log(sum(10, 20));

const sub = (a, b) => a - b;

console.log("sub: " + sub(30, 20));

function greet() {
    console.log("hi");
}

greet();

const greetStudent = name => "hi " + name;
console.log(greetStudent("mr. meow"));

let annonymous = function () {
    console.log("annonymous function");

}

console.log(annonymous());

const withdraw = (balance, amount) => {
    if ((balance - amount) > 0) {
        return true;
    }
    else {
        return false;
    }
}

if (withdraw(3000, 4000)) {
    console.log("withdraw successful");
}
else {
    console.log("withdraw failed");
}


//array in js

const numArray = [1, 2, 3, 4, 5];
console.log(numArray);

numArray.forEach(Element => console.log(Element));

const newNumArray = numArray.map(Element => Element + 5);
console.log("new Array: " + newNumArray);

const filteredArray = numArray.filter(Element => Element > 2);
console.log("fillered Array: " + filteredArray);

const reducedVal = numArray.reduce((sum, Element) => {
    return sum + Element;
}, 0);

console.log("reduced Val: " + reducedVal);

console.log(numArray.some(Element => Element > 4));

console.log(numArray.every(Element => Element > 0));

//object

const student = {
    id: "23787",
    name: "Mr. meow",
    cgpa: 3.14,
    getName: function () {
        const sayName = () => {
            console.log(this.name);
        }

        sayName();
    }
}

student.dept = "CSE";

console.log(student.id);
console.log(student.name);
console.log(student.cgpa);
console.log(student.dept);
student.getName();

console.log(student["id"]);

//array destructing

const [v1, v2, v3, v4, v5] = numArray;
console.log(v1, v2, v3, v4, v5);

const person = {
    name: "Mr. Meow",
    money: 10,
    gender: "male",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    }
}

const { name: newName, money: newMoney, gender: newGender, address: { city: newCity, country: newCountry } } = person;
console.log(newName, newMoney, newGender, newCity, newCountry);

//spread

function addition(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(addition(...numArray));

const university = {
    name: "Aiub",
    location: "kuril",
}

const university2 = {
    ...university,
    creditFee: 2000,
}

console.log(university2.name, university2.location, university2.creditFee);

//rest

const [val1, val2, ...rest] = numArray;
console.log(val1, val2, rest);

function multiplication(...numArray) {
    let mul = 1;
    for (let i of numArray) {
        mul = mul * i;
    }
    return mul;
}

console.log(multiplication(10, 20, 30, 40, 50));

//asyncronous js


//syncronous
console.log("A");
console.log("B");
console.log("C");


//asyncronous

// console.log("Aysnc Ops");
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 3000)
// console.log("C");

// const intervalId = setInterval(() => {
//     console.log("Hi");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 12000)


//promise

function testPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let stimulator = true;
            if (stimulator) {
                resolve("success");
            }
            else {
                reject("failed");
            }
        }, 5000)

    })
}

testPromise().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("thanks buddy!");
})

//async await

async function getUserData() {
    return new Promise((resolve, reject) => {

        let admin = true;
        if (admin) {
            resolve({ userId: 70 });
        }
        else {
            reject("you are not an Admin")
        }

    })
}

async function getResult(userId) {
    const userResult = [{ userId: 30, result: "pass" }, { userId: 60, result: "failed" }];

    return new Promise((resolve, reject) => {

        for (let res of userResult) {
            if (res.userId === userId) {
                resolve({ result: res.result });
            }
        }

        reject("user Not Found");
    })
}


async function executor() {

    try {
        const user = await getUserData();
        const result = await getResult(user.userId);
        console.log("result is :" + result.result);
    }
    catch (error) {
        console.log(error);
    }

}

executor();



//ES6 Module

console.log(ISum(100, 100));


console.log(exponse(10, 20));


