var x=document.getElementById("x");
var y=document.getElementById("y");

function toplama()
{
    var sonuc=Number(x.value)+Number(y.value);
    alert(sonuc);
}
function cikarma()
{
    var sonuc=Number(x.value)-Number(y.value);
    alert(sonuc);
}
function carpma()
{
    var sonuc=Number(x.value)*Number(y.value);
    alert(sonuc);
}
function bolme()
{
    var sonuc=Number(x.value)/Number(y.value);
    alert(sonuc);
}
function modalma()
{
    var sonuc=Number(x.value)%Number(y.value);
    alert(sonuc);
}