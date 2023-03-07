var x="esra";

function test()
{
    x=5;
    y=6;
    // y tanımlanmamasına rağmen js kendi tanımlar ve doldurur
}

console.log("before: ", x);  //esra
test();
console.log("after: ", x);  //5
console.log("y: " ,y);  

// blok kapsamlı kavramı gösteren program
// genel değişken
let a = 'Hello';

function greet() {

    // yerel değişken
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // blok kapsamlı değişken
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // c değişkenine buradan erişilemiyor
    console.log(a + ' ' + b + ' ' + c);
}

greet();

