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
console.log(countVowels("values"));

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