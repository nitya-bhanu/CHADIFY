let song_number = 1;
let audioElement = new Audio("MUSIC/Woods.mp3");
let play_current = document.getElementById("play");
let duration_bar = document.getElementById("duration_bar");
let count_time = document.getElementById("current_time");
let songName = Array.from(document.getElementsByClassName("song_bucket"));
let now_playin = document.getElementById("playin_song_name");

function play() {
  var image_tag = document.getElementById("play");
  if (image_tag.src.match("ICONS_IMAGES/play.png")) {
    image_tag.src = "ICONS_IMAGES/pause.png";
    audioElement.play();
  } else {
    image_tag.src = "ICONS_IMAGES/play.png";
    audioElement.pause();
  }
}
function nextsong(n) {
  if (n == 1) {
    audioElement.src = "MUSIC/Woods.mp3";
  } else if (n == 2) {
    audioElement.src = "MUSIC/Leave a light on.mp3";
  } else if (n == 3) {
    audioElement.src = "MUSIC/Champion.mp3";
  } else if (n == 4) {
    audioElement.src = "MUSIC/Capsize.mp3";
  } else if (n == 5) {
    audioElement.src = "MUSIC/Battle Symphony.mp3";
  }
  audioElement.currentTime = 0;
  audioElement.play();
}
function changecover(n) {
  cover_Id = document.getElementById("current_playing_image");
  if (n == 1) {
    cover_Id.src = "ICONS_IMAGES/song1.jpg";
  } else if (n == 2) {
    cover_Id.src = "ICONS_IMAGES/song2.jpg";
  } else if (n == 3) {
    cover_Id.src = "ICONS_IMAGES/song3.jpg";
  } else if (n == 4) {
    cover_Id.src = "ICONS_IMAGES/song4.jpg";
  } else if (n == 5) {
    cover_Id.src = "ICONS_IMAGES/song5.jpg";
  }
}
function nowplaying_name(n) {
  current = document.getElementById("playin_song_name");

  if (n == 1) {
    current.innerText = "WOODS";
  } else if (n == 2) {
    current.innerText = "Leave a light on";
  } else if (n == 3) {
    current.innerText = "Champion";
  } else if (n == 4) {
    current.innerText = "Capsize";
  } else if (n == 5) {
    current.innerText = "Battle Symphony";
  }
  image_tag = document.getElementById("play");
  image_tag.src = "ICONS_IMAGES/pause.png";
}
audioElement.addEventListener("timeupdate", () => {
  progress = parseFloat(
    (audioElement.currentTime / audioElement.duration) * 1000
  );
  duration_bar.value = progress;
  if ((audioElement.currentTime % 60).toFixed(0) >= 10)
    count_time.innerText =
      "0" +
      (audioElement.currentTime / 60).toFixed(0) +
      ":" +
      (audioElement.currentTime % 60).toFixed(0);
  else
    count_time.innerText =
      "0" +
      (audioElement.currentTime / 60).toFixed(0) +
      ":0" +
      (audioElement.currentTime % 60).toFixed(0);
});
duration_bar.addEventListener("change", () => {
  audioElement.currentTime =
    (duration_bar.value * audioElement.duration) / 1000;
});
Array.from(document.getElementsByClassName("song_bucket")).forEach((Element) => {
  Element.addEventListener("click", (e) => {
    nextsong(e.target.id);
    changecover(e.target.id);
    nowplaying_name(e.target.id);
  });
});
document.getElementById("next").addEventListener("click", () => {
  if (song_number >= 5) song_number = 1;
  else song_number++;
  nextsong(song_number);
  changecover(song_number);
  nowplaying_name(song_number);
});

document.getElementById("previous").addEventListener("click", () => {
  if (song_number <= 1) {
    song_number = 5;
  } else {
    song_number--;
  }
  nextsong(song_number);
  changecover(song_number);
  nowplaying_name(song_number);
});
function search() {
  var searchSong = document.getElementById("search").value;
  searchSong=searchSong.toLowerCase();
  console.log(searchSong);
  if (searchSong == "woods") songNumber = 1;
  else if (searchSong == "leave a light on") songNumber = 2;
  else if (searchSong == "champion") songNumber = 3;
  else if (searchSong == "Capsize") songNumber = 4;
  else if (searchSong == "battle symphony") songNumber = 5;
  else alert("sorry search results aren't found");
  nextsong(songNumber);
  changecover(songNumber);
  nowplaying_name(songNumber);
}
