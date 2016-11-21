var curId;

function show_translation(id)
{
  // The tooltip translation
  var translation = decodeURIComponent(id.srcElement.href.split("/").pop());
  var original = id.srcElement.innerText;

  var d_translation = document.getElementById('translation');
  d_translation.innerText = translation;
  d_translation.style.visibility = "visible";
  d_translation.style.top = id.pageY+10+'px';
  d_translation.style.left = id.pageX+10+'px';
}

function hide_translation(id)
{
  var d_translation = document.getElementById('translation');
  d_translation.style.visibility = "hidden";
}

function show_floatingfooter(id)
{
  id.preventDefault();
  document.getElementById('floatingfooter').style.visibility = "visible";
  curID = id;

  var translation = decodeURIComponent(id.srcElement.href.split("/").pop());
  var original = id.srcElement.innerText;

  document.getElementById('footer_translation').innerText = translation;
  document.getElementById('footer_original').innerText = original;
}

function closeFooter()
{
  document.getElementById('floatingfooter').style.visibility = "hidden";
}

function speak_translation()
{
  var id = curID;
  var original = id.srcElement.innerText;
  var audio = new Audio('/audio/' + slug + "/" + original + '.m4a');
  console.log(audio);
  audio.play();
  id.preventDefault();
}

// http://stackoverflow.com/questions/12362256/addeventlistener-on-nodelist
function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

var post = document.getElementsByClassName('post')[0];

addEventListenerList(post.getElementsByTagName("a"), "mouseenter", show_translation);
addEventListenerList(post.getElementsByTagName("a"), "mouseleave", hide_translation);
addEventListenerList(post.getElementsByTagName("a"), "click", show_floatingfooter);
