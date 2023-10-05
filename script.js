 
// Number(数値型)
// String(文字列型)　・・・textContentから引っ張ってきた値は、文字列型になっている
// typeof ・・・型を表示する

let input = document.getElementById("input").textContent;
// console.log(input)
// console.log(typeof input)
// input = Number(input)
// console.log(typeof input)
document.getElementById("output").textContent = Number(input) + 1000 + "です。";
