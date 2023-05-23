// 1buat file soal-1
// 2buat objek
let people = {
  nama: "achmad",
  nim: "02032111018",
  email: "achmadfauzan913@gmail.com",
};
// 3buat varibel yang nilainya diambil dari properti objek
// dari objek diatas dengan desstructuring
let { nama, nim, email } = people;
// 4cetak3 variable itu
console.log(nama);
console.log(nim);
console.log(email);
// 5buat 3 variable array
const t1 = ["Sawal", "Anggi"];
const t2 = ["Dimus", "Wahyu"];
const t3 = ["Andri", "ISal"];
// 6cetak gabungan 3 array dengan spread
const bestt = [...t1, ...t2, ...t3];
console.log(bestt);
