// *** NUM 1: Refactor it to use the rest operator & an arrow function
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
} 

const filterOutOddsCopy = (...args) => args.filter(v => v % 2 === 0);


// *** NUM 2: FindMin: Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator. 
const findMin = (...args) => {
    return args.reduce((min, nextVal) => {
        if(nextVal < min) {
            return nextVal;
        }
        return min;
    }) 
};

// *** NUM 3: mergeObjects. // Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (object1, object2) => {
    return {...object1, ...object2};
};


// **** NUM 4: doubleAndReturnArgs -> Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled. 
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8].
// const doubleAndReturnArgs = (arr, ...args) => {
//     return args.reduce((sum, nextVal) => sum + nextVal);
//     return [...arr, args];
// }

const doubleAndReturnArgs = (arr, ...args)  => {
    return [...arr, ...args.map(n => n * 2)];
};

// ***** NUM 5: Slice and Dice! // For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! /// Make sure that you are always returning a new array or object and not modifying the existing inputs.

// **** 5.1: /** remove a random element in the items array and return a new array without that item. */
function removeRandom(items) {
    let randomItem = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomItem), ...items.slice(randomItem + 1)];
};

// **** 5.2: extend: Return a new array with every item in array1 and array2:
// function extend(array1, array2) {
//     return [...array1, ...array2];
// };
const extend = (array1, array2) => {
  return [...array1, ...array2];
}

// **** 5.3: addKeyVal: Return a new object with all the keys and values from obj and a new key/value pair:
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    
    return newObj;
};

// **** 5.4: removeKey: Return a new object with a key removed.
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];

    return newObj;
};

// **** 5.5: combine: Combine two objects and return a new object:
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};


// **** 5.6: update: Return a new object with a modified key and value.
const update = (obj, key, val) => {
    // copy  the original obj
    let newObj = {...obj};
    // update the obj with new key + val
    newObj[key] = val;
    // return the new obj
    return newObj;
};