var bodyBg = document.getElementsByTagName("body")[0];
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("music-cover");

//Song Title

const songs = [
  "Lets Groove - Earth, Wind & Fire",
  "Chris Brown - Under The Influence",
  "Sierra Kidd - Living Life, In The Night",
  "Loveless - Middle Of The Night",
  "Fool's Garden - Lemon Tree",
  "The Weeknd - A Lonely Night",
  "Rick Astley - Never Gonna Give You Up",
  "ChubbyChecker - Let's twist again",
];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
  if(songIndex == 0){
    bodyBg.style.backgroundImage = "linear-gradient(to bottom, #c31432, #240b36)"
} else if( songIndex == 1){
    bodyBg.style.backgroundImage = "linear-gradient(to top, #0f2027, #203a43, #2c5364)"
}else if( songIndex == 2){
    bodyBg.style.backgroundImage = "linear-gradient(to right, #ee9ca7, #ffdde1)"
}else if( songIndex == 3){
    bodyBg.style.backgroundImage = "linear-gradient(to top, #8e2de2, #4a00e0)"
}else if( songIndex == 4){
    bodyBg.style.backgroundImage = "linear-gradient(to right, #f12711, #f5af19)"
}else if( songIndex == 5){
    bodyBg.style.backgroundImage = "linear-gradient(to left, #0f0c29, #302b63, #24243e)"
}else if( songIndex == 6){
    bodyBg.style.backgroundImage = "linear-gradient(to top, #ff9966, #ff5e62)"
}else if( songIndex == 7){
    bodyBg.style.backgroundImage = "linear-gradient(to right, #232526, #414345)"
}else if( songIndex == 8){
    bodyBg.style.backgroundImage = "linear-gradient(to right, #42275a, #734b6d)"
}
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");

  audio.play();
}
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");

  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }

});

//SONG CHANGE

prevBtn.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length -1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// function bgChange(){
// var musicContainer = document.getElementById("music-container");

//     if(songIndex == 1){
//         musicContainer.style.backgroundColor = "red"
//     }
// }