var sayi1=document.getElementById("sayi1");  //en başta nesnemizin içi boş olduğu için nesnenin kendisi tutarız
var sayi2=document.getElementById("sayi2"); 
var sonuc=document.getElementById("sonuc");


function hesapla(type)
{
    var sonucText="";

   if(type=="+")
   {
    sonucText=Number(sayi1.value)+Number(sayi2.value);
   }
   else if(type=="-")
   {
    sonucText=Number(sayi1.value)-Number(sayi2.value);
   }
   else if(type=="*")
   {
    sonucText=Number(sayi1.value)*Number(sayi2.value);
   }
   else if(type=="/")
   {
    sonucText=Number(sayi1.value)/Number(sayi2.value);
   }
   
    sonuc.innerHTML=sonucText;

}
// ... sayesinde bütün parametreleri bir değişkene toplarız
//ilk eleman değişkene(ilkSayi) atanır
//geri kalanlar params değişkenine atanır(dizi mantığı)
//forEach yapısı ile değişkenin içindeki elemanları tek tek ulaşırız
function test(ilkSayi,...params)
{
    console.log(params);

    var sonuc=0;
    params.forEach(item =>{
        sonuc += item;
        console.log(item);
    });
    // alert(sonuc);
    
    return sonuc;
}

var newResult = test(4,3,2,1);
alert(newResult); 
newResult = test(50,60,40);
console.log(test(50,50,100,250))
alert(newResult);

