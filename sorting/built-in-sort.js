const arrOfNumbers = [6,4,15,10];
const arrOfNames = ["Steele", "Colt", "Data Structures", "Algorithms" ];

function camparebyNumber(a, b) {
 // se retornar neativo, a virá antes de b
 // se retornar positivo, a virá depois de b
 return a - b;
}

function compareByLength(str1, str2) {
	return str1.length - str2.length
}

console.log(arrOfNumbers.sort(camparebyNumber)) // [ 4, 6, 10, 15 ]
console.log(arrOfNames.sort(compareByLength)) // [ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
