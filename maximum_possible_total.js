//Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
function maxTotal(arr) {
    
    let sum = 0;
    //revert a and b to sort in descending order.
    for (let num of arr.sort((a, b) => b - a).slice(0, 5))
    {
        sum += num;
    }
    return sum;
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));