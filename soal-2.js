const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];
// 2buat 2 funtion
const gabung = [...hewanBuas, ...hewanJinak];
// fun1
const binatang2 = () => console.log(gabung);
// fun2
const makananKesukaan = () => {
  let lauk, kangkung, beas;
  [lauk, kangkung, beas] = hewanJinak;
  console.log("lauk : " + lauk);
  console.log("kangkung : " + kangkung);
  console.log("beas : " + beas);
};
makananKesukaan();
// 3cetak fun1 setelah 5s cetak fun2
const cetak = new Promise((a) => {
  setTimeout(() => {
    a(binatang2());
  }, 5000);
});
