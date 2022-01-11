

let video = document.querySelector('#video');
let title = document.querySelector('#title');


video.src = videojson.videos[0].videourl;
window.currentvideo = 0;


//Functions 

function next(){
  let id = videojson.videos[currentvideo + 1];
  video.src = id.videourl;
  title.innerHTML = id.title;
  currentvideo = currentvideo + 1;
}

//Onclicks
function playpause() {
  if (video.paused){
    video.play();
  } else {
    video.pause();
  }
}