/**
 *
 * @param {string} long 
 * @param {string} short 
 */
function searchSubstring(long, short) {
  let counter = 0;

  for(let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++) {
      if(short[j] !== long[i+j]) break;
      if(j === short.length - 1) counter++;
    }
  }

  return counter;
}

console.log(searchSubstring('ownomghtyuomg', 'omg')) // 2

/*
Pseudocodea
1. Loop over the long string
2. loop over th short string
3. Se os caracteres não correspondem, parar o loop interno
4. Se não correspondem, continuar o loop
5. Se completar o loop e econtrar o padrão, incrementar um contador de matchs
6. Retornar o contador
*/
