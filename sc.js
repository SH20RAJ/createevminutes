

let video = document.querySelector('#video');
let title = document.querySelector('#title');


window.currentvideo = 0;

//Functions 
function init(){
  video.src = videojson.videos[0].videourl;
  title.innerHTML = videojson.videos[0].title;
  
}


function next(){
  if(currentvideo == 10) back();
  let id = videojson.videos[currentvideo + 1];
  video.src = id.videourl;
  title.innerHTML = id.title;
  currentvideo = currentvideo + 1;
  fill();
}

function prev(){
  if(currentvideo == 1) back();
  let id = videojson.videos[currentvideo - 1];
  video.src = id.videourl;
  title.innerHTML = id.title;
  currentvideo = currentvideo - 1;
  fill();
}

function playpause() {
  if (video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function fill(){
  let x = currentvideo/10 * 100;
  let fill = document.querySelector('#completed').style.width = ""+x+"%";
  document.location.hash = currentvideo;
  check();
}

function check(){
  
  
}
function back(){
  window.location.href = "feeds.html"
}

