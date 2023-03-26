// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

$(document).ready(function(){
  $('.box').hover(function () {
    $(this).toggleClass('shadow-lg rounded-2 bg-white')
    $(this).css('transition', 'all 0.5s ease-in-out');
  })
  
});