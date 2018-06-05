
// v1 aca se crean en un nuevo array 
/*
const vowels = ['a', 'b', 'c', 'd', 'e'];
const names = ['mariel', 'rodrigo', 'ropo'];
let size = vowels.length;
let lastPosition = size - 1 ;
let newVowels = [];
for (let i = lastPosition ; i >= 0; i--){
    console.log(vowels[i]);
    newVowels += vowels[i];
}
*/
// V2 modificando el mismo array 
// creando la funcion reverse 
/*
const reverse = array => {
    let newArray = [];
    var largo = array.length;
    var ultimaPosicion = largo - 1; 
    for (let i = ultimaPosicion ; i >=0; i-- ) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverse (vowels));
console.log(reverse(names))
*/
// siguiente ejemplo 
const vowels = ['a', 'b', 'c', 'd', 'e'];
const names = ['mariel', 'rodrigo', 'ropo'];

const reverse = array => {
    for (let i = 0 ; i <array.length; i++) {
        let item = array.pop();
        array.splice(i, 0, item);
    }
    return array;   
}

console.log(reverse(vowels));
console.log(reverse(names));