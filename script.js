document.addEventListener("DOMContentLoaded", function () {
  var i = 0;
  var txt = 'Hi, I am a Michaella! Welcome to my portfolio website. I am a Computer Science student at University of Cyprus, with a passion for creating innovative solutions.';
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
