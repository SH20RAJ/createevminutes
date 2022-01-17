let video = $('#video')[0];
let title = $('#title')[0];


getjson('ryQCmre');

function getjson(id) {
  //var id = 'ryQCmre';
  var form = new FormData();
  var settings = {
    "url": "https://api.imgur.com/3/album/"+id+"",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Client-ID 6db47bd7029562d"
    },
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

$.ajax(settings).done(function (response) {
    init(JSON.parse(response),0);
  });
}

function init(json,currentvideo) {
  window.json = json;
  window.currentvideo = currentvideo;
  video.src = json.data.images[currentvideo].link;
  title.innerHTML = json.data.images[currentvideo].title;
  $('#colx')[0].innerHTML = json.data.id+"."+(currentvideo+1);
  $('#completed')[0].style.width = (currentvideo+1)/json.data.images.length * 100+"%";
  location.hash = "?collection="+json.data.id+"&id="+(currentvideo+1)+"";
}
const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1) + min);

function next(){
  init(json,window.currentvideo + 1)
}
function prev(){
  init(json,window.currentvideo - 1)
}
function random(){
  getjson(posts[getRandomInt(0,posts.length)].id);
}
function playpause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
