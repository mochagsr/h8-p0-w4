function cariModus(arr) {
  // you can only write your code here!
  let sama = null
  let maxCounter = 0
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++
      }
    }
    if (maxCounter < counter && counter >= 2) {
      if (counter === arr.length) {
        return -1
      } else {
        maxCounter = counter
        sama = arr[i]
      }
    }
  }

  if (sama !== null) {
    return sama
  }

  return -1
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1