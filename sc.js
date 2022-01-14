

let video = document.querySelector('#video');
let title = document.querySelector('#title');


window.currentvideo = 0;

video.onloadeddata = function(){
  document.querySelector('#loader').style.display = "none";
}
//Functions 
function init(){
  video.src = videojson.videos[0].videourl;
  title.innerHTML = videojson.videos[0].title;
  
}


function next(){
  document.querySelector('#loader').style.display = "block";
  video.onloadeddata = setTimeout(function(){
  document.querySelector('#loader').style.display = "none";
},1000) 
  if(currentvideo == 9) back();
  let id = videojson.videos[currentvideo + 1];
  video.src = id.videourl;
  title.innerHTML = id.title;
  currentvideo = currentvideo + 1;
  fill();
}

function prev(){
  if(currentvideo == 0) back();
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
  let x = (currentvideo + 1)/10 * 100;
  let fill = document.querySelector('#completed').style.width = ""+x+"%";
  document.location.hash = currentvideo + 1;
  // check();
}

function back(){
  window.location.href = "../"
}

function share(){
  window.location.href = videojson.videos[currentvideo].videourl;
}
