var video = document.getElementById("myVideo");
var progressBar = document.getElementById("progressBar");
var currentTime = document.getElementById("currentTime");
var volumeRange = document.getElementById("volumeRange");

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function setVolume() {
    video.volume = volumeRange.value;
}

video.addEventListener("timeupdate", function() {
    var value = (video.currentTime / video.duration) * 100;
    progressBar.value = value;
    currentTime.textContent = formatTime(video.currentTime);
});

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainderSeconds = Math.floor(seconds % 60);
    if (remainderSeconds < 10) {
        remainderSeconds = "0" + remainderSeconds;
    }
    return minutes + ":" + remainderSeconds;
}


const BeatVideo = document.getElementById('myVideo');
const BeatButton = document.getElementById('BeatButton');
const BeatSRCList = ["sources/sounds/nigga1.mp3", "sources/sounds/nigga2.mp3", "sources/sounds/nigga3.mp3"];
let lastRandomBeatIndex = -1;

BeatButton.addEventListener('click', function() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * BeatSRCList.length);
    } while (randomIndex === lastRandomBeatIndex);

    const randomBeat = BeatSRCList[randomIndex];
    BeatVideo.getElementsByTagName('source')[0].src = randomBeat;
    BeatVideo.load();

    lastRandomBeatIndex = randomIndex;
});

const TopicText = document.getElementById('TopicText');
const TopicButton = document.getElementById('TopicButton');
const TopicList = ["Twój stary pijany", "Ziembert Huj", "Jebac cie"];
let lastRandomTopicIndex = -1;

TopicButton.addEventListener('click', function() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * TopicList.length);
    } while (randomIndex === lastRandomTopicIndex);

    const randomTopic = TopicList[randomIndex];
    TopicText.innerText = randomTopic;

    lastRandomIndex = randomIndex;
});

const PhotoImage = document.querySelector('.PhotoStyleIMG');
const PhotoButton = document.getElementById('PhotoButton');
const PhotoSRCList = [];
for (let i = 1; i <= 16; i++) {
    PhotoSRCList.push(`sources/images/photo${i}.jpg`);
}

let lastRandomPhotoIndex = -1;

PhotoButton.addEventListener('click', function() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * PhotoSRCList.length);
    } while (randomIndex === lastRandomPhotoIndex);

    const randomPhoto = PhotoSRCList[randomIndex];
    PhotoImage.src = randomPhoto;

    lastRandomPhotoIndex = randomIndex;
});
