window.addEventListener("DOMContentLoaded", function() {
    centerDiv();
  
    window.addEventListener("resize", function() {
      centerDiv();
    });
  });
  
  function centerDiv() {
    const div = document.getElementById("bb-container");
    const width = div.offsetWidth;
    const height = div.offsetHeight;
  
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
  
    div.style.left = left + "px";
    div.style.top = top + "px";
  }

//   advanced buttonvar bbButton = document.getElementById("bb-button");

var bbButton = document.getElementById("bb-button");

bbButton.addEventListener("mousemove", function(event) {
  var buttonRect = bbButton.getBoundingClientRect();
  var mouseX = event.clientX - buttonRect.left;
  var mouseY = event.clientY - buttonRect.top;

  bbButton.style.setProperty("--mouse-x", mouseX + "px");
  bbButton.style.setProperty("--mouse-y", mouseY + "px");
});
