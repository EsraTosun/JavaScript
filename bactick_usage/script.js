const containerDiv = document.getElementById("buttons");
const dataCount = 78;
const dataCountForPerPage = 10;

let pageCount = Math.ceil(dataCount / dataCountForPerPage);
console.log(dataCount % dataCountForPerPage);



console.log(pageCount);

for(let i= 1; i<=pageCount; i++)
{
    containerDiv.innerHTML += 
    `<button onclick= "goToPage(${i})"> ${i} </button>`;
    //"<button onclick='goToPage(" + i +")'>" + i +"</button>";
}

function goToPage(pageIndex)
{
    alert(pageIndex);
}



// let => Yanlışlıkla bir değişkeni yeniden tanımlayamazsınız.
// EROR verir. Ama var kullanırsanız hata vermez

// Math.floor() => verdiğimz sayıyı aşağıya yuvarlar
// Math.ceil() => verdiğimz sayıyı yukarı yuvarlar

// `` bu => özel işaret sayesinde kod daha kısa yazılır
// Alt Gr + NorktalıVirgül(;) => backtick 


// BACKTİCK USAGE 