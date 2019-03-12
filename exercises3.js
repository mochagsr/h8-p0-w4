function cariMedian(arr) {
  // you can only write your code here!
  // arr.sort(function (a, b) {
  //   return a - b
  // });

  let hitung = 0
  if (arr.length % 2 !== 0) {
    //ganjil
    let nilai = Math.floor(arr.length / 2)
    hitung += arr[nilai]
  } else {
    //genap
    let nilteng = (arr.length) / 2
    let nilaiA = arr[nilteng - 1]
    let nilaiB = arr[nilteng]
    let hitungGenap = (nilaiA + nilaiB) / 2
    //console.log(nilaiA, nilaiB);
    hitung += hitungGenap
  }

  return hitung
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5