function subtotals(array) {
  var subtotalArray = Array(array.length);
  console.log({ subtotalArray });
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
      console.log({  i, j })
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

console.log(subtotals([1, 2, 3, 4, 2, 3]))