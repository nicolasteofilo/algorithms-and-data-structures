/**
 * @param {object} obj 
 * @return {number}
 */
function stringifyNumbers(obj) {
  let newObj = {};

  for(const property in obj) {
    if(typeof obj[property] === 'number') {
      newObj[property] =  String(obj[property])
    } else if (Array.isArray(obj[property])) {
        newObj[property] = obj[property]
    } else if(typeof obj[property] === 'object') {
      newObj[property] = stringifyNumbers(obj[property])
    } else {
      newObj[property] = obj[property];
    }
  }

  return newObj;
}



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
