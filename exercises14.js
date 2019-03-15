function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let hasil = []
  if (arrPenumpang.length === 0) {
    return []
  }
  for (let i = 0; i < arrPenumpang.length; i++) {
    // console.log(arrPenumpang[i][1]);
    let obj = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 0
    }
    let posisiAwal = 0
    let posisiAkhir = 0
    for (let j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        posisiAwal = j

      }
      if (arrPenumpang[i][2] === rute[j]) {
        posisiAkhir = j
      }
    }
    obj['bayar'] = (posisiAkhir - posisiAwal) * 2000
    // console.log(posisiAwal, posisiAkhir);
    hasil.push(obj)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]