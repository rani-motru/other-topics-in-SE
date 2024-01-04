// Write a JavaScript program to calculate the factorial of a number.  
function factorial(x) {
    if(x <= 0){
        return 1;
    } 
     return x * factorial(x-1);
}
console.log(factorial(5));

//  Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion. 
var  gcd = function(a, b) {
    if(!b){
        return a;
    }
    return gcd(b, a%b);
} 

console.log(gcd(495, 8));

// 3. Write a JavaScript program to get integers in the range (x, y) using recursion.  
 function getIntegers(x , y, r=[]) {
    if(x >=(y-1)){
        return r;
    } else{
        r.push(x+1);
        return getIntegers(x+1, y, r);
    }
 }
 console.log(getIntegers(2,12));

//  4. Write a JavaScript program to compute the sum of an array of integers.  

function sumOfIntegers(arr, index=0){
if(index >= arr.length){
    return 0;
} else{
    return arr[index] +sumOfIntegers(arr, index+1)
}
}
 var array=[1,3,5,7,9];
console.log(sumOfIntegers(array))

// 5. Write a JavaScript program to compute the exponent of a number.  
function exponent(a, n){
    if(n===0){
        return 1;
    } else {
        return(a * exponent(a,(n-1)));
    }
}
console.log("Exponent = ", exponent(9 ,3));

// 6. Write a JavaScript program to get the first n Fibonacci numbers.  

function fibonacci(num) {
    if(num<=1){
        return [0,1];
    } else {
        var s= fibonacci(num-1);
        s.push(s[s.length -1] + s[s.length -2])
        return s.slice(0, num);
    }
}

console.log(`fibonacci of  =`,fibonacci(8));

// Write a JavaScript program to check whether a number is even or not.  
function evenOrNot(num)
{
    if(num< 0) {
       num = math.abs(num);
    }
    if(num === 0)
    {
        return true;
    }
    if(num === 1){
        return  false;
    } else {
        num = num-2;
        return (evenOrNot(num));
    }
}
console.log("The number 8 is even = ", evenOrNot(8));


// 8. Write a JavaScript program for binary search.  
function binary(arr,target,start=0, end=arr.length- 1)
{
    if(start > end){
    console.log("target not found");

    }

    const mid = Math.floor((start + end)/2);
    if(arr[mid] === target){
        return mid;
    } else if(target <arr[mid]){
        return binary( arr,target,start,mid-1)
    }else {
        return binary(arr, target, mid+1, end)
    }
}

const Arr = [20, 17, 21, 32, 40, 5, 16, 74, 71, 19];
Arr.sort(function(a, b){return a - b});
const target = 16;
const resultIndex = binary(Arr, target);
console.log("Binary Search")
if (resultIndex !== -1) {
    console.log(`The target value ${target} is found at index ${resultIndex}.`);
  } else {
    console.log(`The target value ${target} is not present in the array.`);
  } 
  

// 9. Write a merge sort program in JavaScript.  

function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right arrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements in left and right
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Merge sort function using recursion
  function mergeSort(array) {
    // Base case: If the array has 1 or fewer elements, it is already sorted
    if (array.length <= 1) {
      return array;
    }
  
    // Calculate the middle index
    const middle = Math.floor(array.length / 2);
  
    // Recursively sort the left and right halves of the array
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
  
    // Return the merged result of sorting the left and right halves
    return merge(left, right);
  }
  
  // Example usage: Perform merge sort on an array
  const inputArray = [34, 7, 23, 32, 5, 62];
  const sortedArray = mergeSort(inputArray);
  
  // Output the sorted array
  console.log(sortedArray);

// 10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, 
// such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
function Palindrome(str) {
    if(str.length  <= 1) {
        return true;
    }

    if(str[0] !== str[str.length -1]) {
        return false;
    } else {
        return Palindrome(str.slice(1, -1));
    }
}
console.log(Palindrome("madam")); // Output: true (palindrome)
console.log(Palindrome("abdb"));  // Output: false (not a palindrome)
console.log(Palindrome("ab"));    // Output: false (not a palindrome)
console.log(Palindrome("a")); 

//11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion.   
function binaryToDecimal(binaryString) {
    if(binaryString === ""){
        return 0;
    }
    const lastDigit = parseInt(binaryString[binaryString.length - 1]);
    const remainingBinary = binaryString.slice(0, -1);
    return lastDigit + 2*binaryToDecimal(remainingBinary);
}

const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(`BINARY NUMBER:${binaryNumber}\n DECIMAL NUMBER :${decimalNumber}`);


// 12. Write a JavaScript program to search for a given integer in an array of sorted integers
//  using the Binary Search Algorithm and recursion.  

function binary(arr1,target,start=0, end=arr1.length- 1)
{
    if(start > end){
    console.log("target not found");

    }

    const mid = Math.floor((start + end)/2);
    if(arr1[mid] === target){
        return mid;
    } else if(target <arr1[mid]){
        return binary( arr1,target,start,mid-1)
    }else {
        return binary(arr1, target, mid+1, end)
    }
}

const Arr1= [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
Arr1.sort(function(a, b){return a - b});
const target1 = 6;
const result= binary(Arr1, target1);
console.log("Binary Search")
console.log(`Index of ${target1}: ${binary(Arr1, target1)}`);


// 13. A string consists of digits ranging from 2 to 9, inclusive. 
// Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  