// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function

// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//1. Create a function "finonacci"
//2. Add an argument of a string "take a number and return an array that length containig the numbers of the Tibonacci sequence"
//3. expect the input = 6 and .toEqual = [1,1,2,3,5,8] -- (output)

describe("fibonacci", () => {
    it("takes in a number then returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]),
      expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

  //4. Run the test in yarn jest
  //5. Got the red


// b) Create the function that makes the test pass.


//6. Start with a "fibonacci" function and take "num" as a paremeter
//7. Create an array to return the function, starts with [1,1]
//8. Declare variables a and b 
//9. Run a for loop, start with i = 2 (needs at least two numbers to start with)
//10. Assign variable a and b // let a = array[i-1] -- previouse i and let b = array[i-2] -- one before previous 
//11. .push(a+b) in the array to get the next num
//12. Return the output -- array


const fibonacci = (num) => {
  const array = [1, 1] 
  let a, b;
  for(let i = 2; i < num; i++){
    a = array[i-1];  
    b = array[i-2]; 
    array.push(a+b); 
  }
  return array 
} 

//13. Run the test in yarn jest
//14. Got the green 




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//1. Write a test call "oddNumSort"
//2. Add an argument of a string "takes in an array and returns a new array of only odd numbers sorted from least to greatest"
//3. expect fullArr1 toEqual [-9,7,9,199]


describe("oddNumSort", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
      expect(oddNumSort(fullArr1)).toEqual([-9, 7, 9, 199]),
      expect(oddNumSort(fullArr2)).toEqual([-823, 7, 23])
    })
  })

//4. Run the test in yarn jest
//5. Got the red

// b) Create the function that makes the test pass.

//6. Create a function "oddNunSum" then take array as a parameter 
//7. loop through the array to filter out the odd numbers -- (number % 2 !== 0) and get only typeof of "number" only
//8. .sort() to get the less to greater numbers 

const oddNumSort = (array) => {
  let newNum = array.filter(value => value % 2 !== 0 && typeof value === "number")
  return newNum.sort((a, b) => a - b);
}

//9. Run the test in yarn jest
//10. Got the green





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []


//1. Write a test call "accumateSum"
//2. Add an argument of a string "takes in an array and returns an array of the accumulating sum"
//3. expect numbersToAdd1 toEqual [2, 6, 51, 60]


describe("accumateSum", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
      expect(accumateSum(numbersToAdd1)).toEqual([2, 6, 51, 60]),
      expect(accumateSum(numbersToAdd2)).toEqual([0, 7, -1, 11]),
      expect(accumateSum(numbersToAdd3)).toEqual([])
    })
  })


// b) Create the function that makes the test pass.

//4. Create a function "accumateSum" and take array as a parameter (arrow function)
//5. Add a for loop to -- run through the array
//6. n1, (n1+n2), (n1+n2+n3), (n1+n2+n3+n4) -- array[i] = array[i] + array[i-1] sum of current value of array = current value of array + value of previous array 
//7. return the array (current array)

const accumateSum = (array) => {
  for(let i = 1 ; i < array.length ; i++) {
    array[i] = array[i] + array[i-1];
  }
   return array;
}

//8. Run the test in yarn jest
//9. Got the green