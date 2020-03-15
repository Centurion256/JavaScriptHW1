//Create a function that converts an object into array
function toArr(my_object) {
    //This is the simplest method that I've found, it is also possible to do the same via a foreach loop or a map.
    return Object.entries(my_object);
}

console.log(toArr({}));
console.log(toArr({ key1: 'value1', key2: 'value2' }));
