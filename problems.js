function divideByThree(num) {
  /* Returns the passed in number argument divided by three. */
  let quotient = num / 3;
  return quotient;
}
console.log(divideByThree(9));

function averageOfTwo(num1, num2) {
  /* Returns the average of two numbers, num1 and num2. */
  let avgOfTwo = (num1 + num2) / 2;
  return avgOfTwo;
}
console.log(averageOfTwo(65, 35));

function averageOfFour(num1, num2, num3, num4) {
  /* Takes in four numbers. The function should return the average of all of
    the numbers. */
  let avgOfFour = (num1 + num2 + num3 + num4) / 4;
  return avgOfFour;
}
console.log(averageOfFour(78, 35, 35, 30));

function doubler(nums) {
  /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
  let doubledNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    doubledNumbers.push(nums[i] * 2);
  }
  return doubledNumbers;
}
console.log(doubler([2, 4, 6, 8]));

function combineArrays(arr1, arr2) {
  /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */

  const newArr = arr1.concat(arr2);
  return newArr;
}
console.log(combineArrays(["garlic", "lemon", "olive oil"], ["salt"]));

function wordWithinArray(word, arr) {
  /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */

  if (arr.indexOf(word) !== -1) {
    // console.log("it works!");
    return true;
  } else {
    return false;
  }
}
console.log(wordWithinArray("sunny", ["It", "is", "sunny", "outside"]));

function echo(str) {
  /* Takes in a string and returns that string "echo-ized". E.g. 
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
  let yell = str.toUpperCase();
  let whisper = str.toLowerCase();
  let newStr = `${yell} ... ${str} ... ${whisper}`;
  return newStr;
}
console.log(echo("Mom"));

function fizzBuzz(max) {
  /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
  const multiples = [];
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
    if (i % 15 === 0) {
      multiples.pop();
    }
  }
  return multiples;
}
console.log(fizzBuzz(50));

function hello(name) {
  /* Takes in a string name and returns a string saying "Hello, " to that name. */
  let greeting = `Hello, ${name}`;
  return greeting;
}
console.log(hello("Rachel"));

function goodbye(name) {
  /* Takes in a string name and returns a string saying "Bye, " to that name. */
  let farewell = `Bye, ${name}`;
  return farewell;
}
console.log(goodbye("Rachel"));

function isFive(num) {
  /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}
console.log(isFive(5));

function isOdd(num) {
  /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
  if (num % 2 === 0 || num === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(3));

function isSubString(searchString, subString) {
  /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
  if (searchString.indexOf(subString)) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubString("copenhagen", "hag"));

function aCounter(word) {
  /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
}
console.log(aCounter("blaabærvej"));

module.exports = {
  divideByThree,
  averageOfTwo,
  averageOfFour,
  doubler,
  combineArrays,
  wordWithinArray,
  echo,
  fizzBuzz,
  hello,
  goodbye,
  isFive,
  isOdd,
  isSubString,
  aCounter,
};
