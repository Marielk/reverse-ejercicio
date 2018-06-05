
// v1 aca se crean en un nuevo array 
const vowels = ['a', 'b', 'c', 'd', 'e'];
let size = vowels.length;
let lastPosition = size - 1 ;
let newVowels = [];
for (let i = lastPosition ; i >= 0; i--){
    console.log(vowels[i]);
    newVowels.push(vowels[i]);
}