function checkAB(num) {
  // you can only write your code here!
  for (let i = 0; i < num.length; i++) {
    // console.log(num[i], num[i + 4], nilaiA);
    if (num[i] === 'a') {

      if (num[i + 4] === 'b' || num[i - 4] === 'b') {
        return true
      } else {
        return false
      }
    } else if (num[i] === 'b') {

      if (num[i + 4] === 'a' || num[i - 4] === 'a') {
        return true
      } else {
        return false
      }
    }
  }

  // for (var i = 0; i < num.length; i++) {
  //   if (num[i] === 'a' && num[i + 4] === 'b') {
  //     return true;
  //   } else if (num[i] === 'b' && num[i + 4] === 'a') {
  //     return true;
  //   }
  // }
  // return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false