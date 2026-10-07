

function doSum(a, b) {
    return a + b;
}

function doSub(a, b) {
    return a - b;
}

function doMul(a, b) {
    return a * b;
}

function doDiv(a, b) {
    return a / b;
}

export default function exponse(a, b) {
    return Math.pow(a, b);
}

export { doSum as ESum, doSub, doMul, doDiv }