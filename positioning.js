var launcherButton = document.getElementById("bb-launcher");
var bbContainer = document.getElementById("bb-container");
var closeButton = document.getElementById("close-bb");

launcherButton.addEventListener("click", function() {
  if (bbContainer.classList.contains("open")) {
    bbContainer.classList.add("close");
    bbContainer.classList.remove("open");
    bbContainer.classList.remove("launch");
  } else {
    bbContainer.classList.remove("close")
    bbContainer.classList.add("open");
    bbContainer.classList.remove("launch");
  }
});

closeButton.addEventListener("click", function() {

    bbContainer.classList.add("close");
    bbContainer.classList.remove("open");
    bbContainer.classList.remove("launch");
   // Animation duration
});




// center div, resize  and move image on resize
window.addEventListener("DOMContentLoaded", function() {
    centerDiv();
  
    window.addEventListener("resize", function() {
      centerDiv();
    });

      // Function to handle the element repositioning
  function handleElementPosition() {
    var viewportWidth = window.innerWidth;
    var container = document.querySelector(".bb-container");
    var imgContainer = document.querySelector(".bb-img-container");
    var offerContainer = document.querySelector(".offer-container");
    var inputContainer = document.querySelector(".bb-input-container");

    if (viewportWidth <= 574) {
      // Move the img element under the new parent container
      offerContainer.appendChild(inputContainer);
      inputContainer.appendChild(imgContainer);
    } else {
      // Move the img element back to its original position
      container.appendChild(imgContainer);
    }
  }

  // Call the function initially
  handleElementPosition();

  // Check the viewport width on window resize
  window.addEventListener("resize", function() {
    handleElementPosition();
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
