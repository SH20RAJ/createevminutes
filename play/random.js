let totaljson = 25;
const getRandomInt = (min, max)=>~~(Math.random()*(max-min+1)+min);
  function getParameterByName(a,e){return e||(e=window.location.href),new URL(e).searchParams.get(a)};

function reset(){
  window.rand = getRandomInt(1,totaljson)
  fetch('../collectiondata/'+rand+'.json')
  .then(response => response.json())
  .then(data => {window.videojson = data;init(rand);});
 console.log("Reset "+rand);
}
reset();


let video = document.querySelector('#video');
let title = document.querySelector('#title');


window.currentvideo = 0;

video.onloadeddata = function(){
  document.querySelector('#loader').style.display = "none";
}
//Functions 
function init(a){
  video.src = "https://i.imgur.com/"+videojson.videos[0].imgurid+".mp4";
  video.poster = "https://i.imgur.com/"+videojson.videos[0].imgurid+".png";
  document.getElementById('ogimg').content = "https://i.imgur.com/"+videojson.videos[0].imgurid+".png";
  title.innerHTML = videojson.videos[0].title;
  document.getElementById('hiddenimg').src = "https://i.imgur.com/"+videojson.videos[0].imgurid+".png";
  fill(a);
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
  console.log(rand +" fill #"+ currentvideo);
  let x = (currentvideo + 1)/10 * 100;
  let fill = document.querySelector('#completed').style.width = ""+x+"%";
  document.location.hash = rand+"."+(currentvideo + 1);
  document.getElementById('colx').innerHTML = window.rand+"."+(currentvideo + 1);
  // check();
}

function back(){
  reset();
  currentvideo = 0;
  fill();init();
  currentvideo = -1;
  
}

function share(){
let id = videojson.videos[currentvideo + 1].imgurid;

  location.href = "https://api.whatsapp.com/send?text=Watch%20this%20Video%20on%20CreateevMinutes%20-%20Creative%20Short%20Videos%20Here%20%20%F0%9F%92%96%0A%0AVideo%20Link%20Here%20%3A-%20https://createevminutes.sh20raj.repl.co/play/?collection="+ rand  +"#"+(currentvideo + 1);
}
