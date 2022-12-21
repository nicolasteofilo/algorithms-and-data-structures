/**
 * @param {object} obj 
 * @return {string[]}
 */
function collectStrings(obj) {
  let newArray = [];

  for(const property in obj) {
    if(typeof obj[property] === 'string') {
      newArray.push(obj[property])
    }
    if(typeof obj[property] === 'object') {
      newArray = newArray.concat(collectStrings(obj[property]))
    }
  }
  
  return newArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
