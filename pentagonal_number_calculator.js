//Given n, return the number of distinct dots in a pattern P_n
function  pentagonalNumber(num) {
    return ((3 * Math.pow(num, 2)) - num) / 2;
}

console.log(pentagonalNumber(1));
console.log(pentagonalNumber(2));
console.log(pentagonalNumber(5));
console.log(pentagonalNumber(9));