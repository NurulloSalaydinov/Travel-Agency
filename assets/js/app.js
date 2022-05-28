// home section image changes

let home = document.getElementById('home');

let title = home.querySelector('.home-title');

let subtitle = home.querySelector('.home-desc');

let source_image = ['assets/css/bg/0.jpg', 'assets/css/bg/2.jpg', 'assets/css/bg/3.jpg', 'assets/css/bg/4.jpg', 'assets/css/bg/5.jpg', 'assets/css/bg/6.jpg'];

let _title = ["O'zbek madaniy merosi", "O'zbek me'morchiligi", "Xalq san'ati"];
let _subtitle = [
    "O‘zbekiston madaniyati, Markaziy Osiyo xalqlarining ko‘p asrlik an’analari va turmush tarzi bilan chambarchas bog‘liq boy tarixga ega",
    "Me’morchilik ijodining gullab-yashnashi O‘zbekiston Buyuk Ipak yo‘lining markazi bo‘lgan o‘rta asrlar davriga to‘g‘ri keladi. XIV asrdan boshlab bu yerda dunyoga mashhur me’morchilik yodgorliklari – Samarqanddagi Registon maydoni, Shohi-Zinda majmuasi, Bibixonim masjidi va Gur-Amir maqbarasi, Shahrisabzdagi Oqsaroy, Buxorodagi Poyi kalon va Labi Hovuz, Xivada minora va madrasalar barpo etildi.",
    "O‘zbekistonda azaldan noyob iste’dodli odamlar yashab, xalq san’atining  nodir an’analarini asrab-avaylab, avloddan-avlodga yetkazib kelmoqdalar. Ushbu an’analar bizning tariximizni, ajoyib madaniyatimiz va milliy qadriyatlarimizni unutishga yo‘l bermaydi.",
];

setInterval(() => {
    let random_image = source_image[Math.floor(Math.random() * source_image.length)]
    let random_title = _title[Math.floor(Math.random() * _title.length)]
    let random_subtitle = _subtitle[Math.floor(Math.random() * _subtitle.length)]
    setTimeout(() => {
        home.style = `background-image: url(${random_image}) !important;`;
        title.attributes['data-title'].nodeValue = random_title;
        subtitle.attributes['data-title'].nodeValue = random_subtitle;
    }, 1000)
}, 3000)


function scrollTrigger() {
    let navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 133) {
            navbar.classList.add('scroll');
        }
        else {
            navbar.classList.remove('scroll');
        }
    })
}

scrollTrigger();