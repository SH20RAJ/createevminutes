const getRandomInt = (min, max) => ~~(Math.random() * (max - min + 1) + min);
let video = $('#video')[0];
let title = $('#title')[0];

let url = new URLSearchParams(location.href);
var postid = getRandomInt(0,posts.length);

if(getParameterByName('collection')){
  console.log('ya')
  getjson(getParameterByName('collection'),parseInt(getParameterByName('id')) -1);
  console.log('Playing '+getParameterByName('collection'));
}else{
  getjson(posts[postid].id);
  console.log('Playing '+posts[postid].id);
}



function getjson(id,vid) {
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
if(!vid){
  vid = 0;
}
$.ajax(settings).done(function (response) {
    init(JSON.parse(response),vid);
  });
}

function init(json,currentvideo) {
  window.json = json;
  window.currentvideo = currentvideo;
  video.src = json.data.images[currentvideo].link;
  title.innerHTML = json.data.images[currentvideo].description;
  $('#colx')[0].innerHTML = json.data.id+"."+(currentvideo+1);
  $('#completed')[0].style.width = (currentvideo+1)/json.data.images.length * 100+"%";
  document.title = posts[currentvideo+2].name+" - CreateevMinutes - Creative Short Videos Here 💖";
  window.history.pushState('new' , 'title' , '?collection='+json.data.id+'&id='+(currentvideo + 1)+'');

}

function next(){
  if(currentvideo == (json.data.images.length + 1)){
    $('#reset')[0].click();
    }else{init(json,window.currentvideo + 1)};
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

function share(){
  location.href = "https://api.whatsapp.com/send?text=Watch%20this%20Video%20on%20CreateevMinutes%20-%20Creative%20Short%20Videos%20Here%20%20%F0%9F%92%96%0A%0AVideo%20Link%20Here%20%3A-%20https://createevminutes.sh20raj.repl.co/shorts?collection="+json.data.id+"&id="+(currentvideo+1)+"";
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
