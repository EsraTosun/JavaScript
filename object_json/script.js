const containerDiv = document.getElementById("buttons");
var object = {
    key: 543,
    key2: "esra",
}
console.log(object);
console.log(Object.keys(object)); // objecti dizi yapar
Object.keys(object).forEach((item) => {
    console.log(object[item]);
});


// OBJECT (JSON).