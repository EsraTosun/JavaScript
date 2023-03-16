
const names =[
    "Ahmet",
    "Ali",
    "Veli",
    "Ayşe",
    "Zeki",
    "Anıl",
    "Nisa",
    "Melike",
    "Şaziye",
    "Şeyda",
    "Dilara",
    "Dilruba",
    "Bilge",
    "Dua",
    "Esra",
    "Aziz",
    "Emine",
    "Mehmet",
    "Mehmet Ali",
    "Zümrüt",
    "Emine Gül",
    "Gül"
];

const surnames =[
    "Yılmaz",
    "Tosun",
    "Demir",
    "Dağ",
    "İnci",
    "Çetin",
    "Kösen",
    "Ceylan",
    "Açıkgöz",
    "Yağız",
    "Altındağ",
    "Bozkurt",
    "Kara",
    "Akalın",
    "Bölükbaşı"
]

const jobs = [
    "Tamirci",
    "Tornacı",
    "Programcı",
    "Camcı",
    "Çaycı",
    "Öğretmen",
    "Geliştirici",
    "Şoför",
    "Aşçı",
    "Akademisyen",
    "Lidyum Pil",
    "Çinko Pil",
    "Sıradan Çinko Pil",
    "Terzi",
    "Güvenlik",
    "Bahçıvan",
    "Marangoz",
    "Balıkçı"
]

const randomJob = () => {
    return jobs[Math.floor(Math.random() * jobs.length)];
}

const randomName = () => {
    return names[Math.floor(Math.random()* names.length)];
};

const randomSurname = () => {
    return surnames[Math.floor(Math.random()* surnames.length)];
};

const randomFullName = () => {
    const name = randomName();
    const surname= randomSurname();

    return `${name} ${surname}`;
};

let data = [];

for(let i=0; i<78; i++)
{
    data.push({
        job: randomJob(),
        title: randomFullName(),
        id: i
    });
}

data.forEach((item) => {
    console.log(item.id,item.title,item.job);
});

const containerDiv = document.getElementById("root");

data.forEach((item, index) => {
    containerDiv.innerHTML += `<div id="${item.id}" class="person person-${index}">
       <span class="title"> ${item.title}</span>
       <span class="job"> ${item.job}</span>
    </div>`;
});


// DATA RENDER
