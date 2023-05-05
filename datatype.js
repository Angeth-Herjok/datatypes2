// Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(word){
    let count=0
    let vowels=["a","e","i","o","u"]
    for(let i=0;i<word.length;i++){
        if(vowels.includes(word[i].toLowerCase())){
            count++;
        }
   }
    return count
}
console.log(countVowels("Angeth"));

// Write a function that takes an array of numbers as input and returns the sum of all the numbers.
function arraySum(arrays){
    let sum=0;
    for(let value of arrays){
        sum+=value
    }
    return sum
}
console.log(arraySum([1,2,3,4,5]));

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
//  and false otherwise.
function sumGreaterNumber(a,b){
    let sum=a+b;
   if (sum >100){
  return true
   }
   else{
    return false
   }
     
}
console.log(sumGreaterNumber(50,60));

// Write a function that takes in a array of numbers as a parameter and returns the second largest 
// number in the array

    let array=[2,9,3,8,5,6,7]
    array.sort(function(a,b){
         return b-a
    })
    console.log(array[1]);
    

// Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise

console.log(checkPalindrome("madam"));
function checkPalindrome(word){
    const reverseWord=word.split('').reverse().join('');
    if(word===reverseWord){
        return true
    }
    else{
        return false
    }

}
console.log(checkPalindrome("madam"));



    