function shoppingTime(memberId, money) {
  // you can only write your code here!
  let produk = [
    ['Sepatu Stacattu', 1500000],
    ['Baju Zoro', 500000],
    ['Baju H&N', 250000],
    ['Sweater Uniklooh', 175000],
    ['Casing Handphone', 50000]
  ]
  if (memberId === undefined || memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja.'
  }
  let shoping = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: 0
  }
  for (let i = 0; i < produk.length; i++) {
    if (money >= produk[i][1]) {
      money = money - produk[i][1]
      shoping.listPurchased.push(produk[i][1])
    }
  }
  if (shoping.listPurchased.length === 0) {
    return 'Mohon maaf, uang tidak cukup'
  }
  shoping.changeMoney = money
  return shoping
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja