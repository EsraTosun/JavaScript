var array2 = [3,2,1,0];
console.log(array2[0]);
console.log(array2);
array2.push(-1); //Arrayin sonuna veri ekler
array2.unshift(4); // başa ekler
array2.shift(); //baştan 1 veri siler
array2.pop(); //sondan bir tane veri siler
array2.reverse(); // diziyi tersine çevirir
console.log(array2);
array2.splice(1,2); //yazılan aralığı sil
array2.splice(1,0,5); // 1. indexten sonra ka. tane sileceğin
// sonrada 1. indexe 5 i ekle demek
console.log(array2);
console.log(array2.slice(1,3)); // belli bir aralığı göster


const containerDiv = document.getElementById("buttons");
var array1 = ["Ahmet",2,true,0,[1,2]];
array1.forEach((item, index) => {
    containerDiv.innerHTML += `<button>${item}</button>`
});
//item => dizinin içindeki veri
//index => dizinin indexi


// ARRAY KULLANIMI