

let video = document.querySelector('#video');
let title = document.querySelector('#title');


window.currentvideo = 0;

video.onloadeddata = function(){
  document.querySelector('#loader').style.display = "none";
}
//Functions 
function init(){
  video.src = "https://i.imgur.com/"+videojson.videos[0].imgurid+".mp4";
  video.poster = "https://i.imgur.com/"+videojson.videos[0].imgurid+".png";
  title.innerHTML = videojson.videos[0].title;
  
}


function next(){
  video.poster = "";
  document.querySelector('#loader').style.display = "block";
  video.onloadeddata = setTimeout(function(){
  document.querySelector('#loader').style.display = "none";
},1000) 
  if(currentvideo == 9) back();
  let id = videojson.videos[currentvideo + 1];
  video.src = "https://i.imgur.com/"+id.imgurid+".mp4";
  title.innerHTML = id.title;
  currentvideo = currentvideo + 1;
  fill();
}

function prev(){
video.poster = "";
  
  if(currentvideo == 0) back();
  let id = videojson.videos[currentvideo - 1];
  video.src = "https://i.imgur.com/"+id.imgurid+".mp4";
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
  window.location.href = "https://i.imgur.com/"+ videojson.videos[currentvideo].imgurid +".mp4";
}
