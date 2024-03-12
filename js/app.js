// 2 - masala
// 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing. getSum3(15) => 45

// let n = Number(prompt("Sonni kiriting :"));
// let sum = 0;

// function getSum3(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0) {
//       sum = sum + i;
//     }
//   }
// }
// getSum3(n);
// console.log(sum);

/////////////////////////////////////////////

// 3 - masala
// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.

// let n = Number(prompt("Sonni kiriting :"));
// let jami = 0;

// if (n > 0) {
//   for (let i = n; i <= 2 * n; i++) {
//     jami = jami + i ** 2;
//   }
//   console.log(`Siz so'ragan natija : ${jami}`);
// } else {
//   console.log("Iltimos musbat son kiriting !");
// }

//////////////////////////////////////////////

//4 - masala
// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   obj[i] = [`${arr[i]} : ${arr[i].length}`];
// }
// console.log(obj);

////////////////////////////////////

// 5-masala
// Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

// let n = Number(prompt("Sonni kiriting :"));

// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };
// function getMultipleValues(n, obj) {
//   const res = {};
//   for (const kalit in obj) {
//     if (obj.valuse(kalit)) {
//       result[kalit] = obj[kalit] * n;
//     }
//   }
//   return res;
// }
// const res = getMultipleValues(n, obj);
// console.log(res);

//////////////////////////////////////////////

// 6-masala
// n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

// let number = [4, 5, 9, 12, 89, -4, 2];

// number.sort((a, b) => a - b);

////////////////////////////////////////////////

// 7 - masala
// Satrni bo'sh joy bor yoki yo'qligini tekshiring.
// (split, some)

const array = "Men AbdulazizProgrammerman";

let satr = array.split("").some((element) => {
  return element == " ";
});
console.log(satr);

////////////////////////////////////////////////
