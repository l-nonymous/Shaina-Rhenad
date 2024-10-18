
const imagesAndMessages = [
    {src: 'image1.jpg', message: 'Wow, look at youuu!! very gorgeous oh😍🌷grabeng bungad to, speechless na naman ako hahaha basta ang ganda mo dito (buyag) '},
    {src: 'image2.jpg', message: 'oh ano to? HAHAHA ang cute mo dito oh parang naghahanap ng mama. I had to screenshot this kase ang funny pero cute naman🤭'},
    {src: 'image3.jpg', message: 'tikman na natinnnn grabe, matcha flavor ba naman😂 vid mo agad naaalala ko sa tuwing nakikita ko to'},
    {src: 'image4.jpg', message: 'wow, cute ng mag mommy oh. Bakit ka nagtatago kay potchi, ha mommy?? aba naman.'},
    {src: 'image5.jpg', message: 'oy salmonella! do you still remember this? eto yung sinend mo sakin sa tg, kasi curious ako sa ginagawa nyo don sa lab. '},
    {src: 'image6.jpg', message: 'woah, another pic with potchi. Aba, medyo nakakarami kana potchi ah😏jk lang. Pero mommy na mommy datingan mo dito.'},
    {src: 'image7.jpg', message: 'oy angas naka cap😎 parang di fav yung color pink ah. '},
    {src: 'image8.jpg', message: 'ang cute naman ng ismol daisy na to, like you ho🥰💗'},
    {src: 'image9.jpg', message: 'ganda ng kuha mo dito oh, very Rhenad💗'},
    {src: 'image10.jpg', message: 'aba gusto mo pala maging pink star ah gege'},
    {src: 'image11.jpg', message: 'ooops padaan si mochi, sinama ko na ang cute eh🤗(buyag)'},
    {src: 'image12.jpg', message: 'stress si mommy pero pretty pa din💗💗'},
    {src: 'image13.jpg', message: 'first pic na sinend mo sakin with your fav cat, cute nyo dito ni sechii😻'},
    {src: 'image14.jpg', message: 'na appreciate ko yung pagpitas mo ng hibiscus ng mama mo🌺'},
    {src: 'image15.jpg', message: 'ay eto syempre hindi ko makakalimutan to no, dito talaga ako nagulat kasi ang unexpected naman na ito pa yung ni-recommend mo na book sakin😍🤍'},
    {src: 'image16.jpg', message: 'aba, mukang shy ka dito ah hahaha bago to😆'},
    {src: 'image17.jpg', message: 'very cutesy, very mindful, very nature, very shai. Para kang prinsesa dito🫶'},
    {src: 'image18.jpg', message: 'syempre eto pinaka last kase this is one of my fav pics of you. Dito ko na notice na ang expressive pala ng eyes mo💗✨ every pic mo has a different flavor, dahil sa eyes mo. '},
    {src: 'image19.jpg', message: 'flowers for you, mommy. Look, parang daisy din oh. Mukang magiging hobby ko pa yata mamitas ng flowers ah. Happy birthday!🤍🌷'},
    {src: '', message: 'This is the notepad style letter.'} 
];

let currentPage = 1; 
const totalPages = imagesAndMessages.length; 


const stopPauseOverlay = document.getElementById('stop-pause-overlay');
const icon = document.getElementById('icon');
const mainContent = document.getElementById('main-content');
const backgroundMusic = document.getElementById('backgroundMusic'); 
const confettiSound = document.getElementById('confettiSound'); 
const newMusic = document.getElementById('newMusic'); 
const notepadContainer = document.getElementById('notepad-container'); 
backgroundMusic.loop = true;
let isStop = true; 


icon.addEventListener('click', () => {
    if (isStop) {

        icon.innerHTML = '<div class="pause-icon"><div></div><div></div></div>'; 
        backgroundMusic.play(); 
        confettiSound.play(); 
        isStop = false; 
    } else {

        stopPauseOverlay.style.animation = 'slideUp 1s forwards';
        setTimeout(() => {
            stopPauseOverlay.style.display = 'none'; 
            mainContent.style.display = 'block'; 
        }, 1000); 
    }
});


function loadPage(page) {
    const photocard = document.querySelector('.photocard img');
    const message = document.querySelector('.photocard p');
    const nameTitle = document.getElementById('name-title'); 

    if (page < totalPages) {

        photocard.src = imagesAndMessages[page - 1].src;
        message.textContent = imagesAndMessages[page - 1].message;


        document.querySelector('.page-indicator').textContent = `${page}/${totalPages}`;


        if (page === 11) {
            nameTitle.textContent = "SHAINA RHENAD"; 
        } else {
            nameTitle.textContent = ""; 
        }


        if (page <= 20) {
            newMusic.pause(); 
            newMusic.currentTime = 0;
            backgroundMusic.play(); 
        }
    } else {

        mainContent.style.display = 'none';
        notepadContainer.style.display = 'block';

        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        newMusic.play();
    }
}

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        loadPage(currentPage);
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        if (currentPage === 12) {
            currentPage = 19; 
            loadPage(currentPage);
            backgroundMusic.play();
            newMusic.pause();
            newMusic.currentTime = 0;
        } else {

            currentPage--;
            loadPage(currentPage);
        }
    }
});

loadPage(1);

function createFallingEmoji() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['🎀', '♡ ︎𓍢ִ໋🌷͙֒']; 

    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    const xPos = Math.random() * window.innerWidth;
    emoji.style.left = `${xPos}px`;

    const fallDuration = Math.random() * 5 + 5; 
    emoji.style.animationDuration = `${fallDuration}s`;

    emojiContainer.appendChild(emoji);

    emoji.addEventListener('animationend', () => {
        emojiContainer.removeChild(emoji);
    });
}

setInterval(createFallingEmoji, 1000); 