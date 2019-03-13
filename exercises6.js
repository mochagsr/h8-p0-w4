function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let result = ''
  let sementara = ''
  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka; j++) {
      sementara = String(i) + String(j)
      if (i * j === angka) {
        // console.log(i, j);
        if (result.length === 0) {
          result = sementara
        } else if (sementara.length < result.length) {
          result = sementara
        }
      }
    }

  }
  // console.log(sementara);
  return result.length

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2