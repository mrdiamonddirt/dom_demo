//in javascript
var imageDisplayed = true;
const img = document.getElementById("img");

const change_image = function () {
  if (img.dataset.image == "logo1") {
    img.src = "/images/small.gif";
    img.dataset.image = "logo2";
    return;
  }
  if (img.dataset.image == "logo2") {
    img.src = "/images/discord.webp";
    img.dataset.image = "logo1";
    return;
  }
};

// Using the event object, get the x and y coordinates of where you
// click on the page and display the values in a p tag.
// Hint: look into clientX and clientY

// image functions

document.getElementById("myBtn").addEventListener("click", function () {
  // alert("Print");
  var img = document.getElementById("img");
  var imgUrl = document.getElementById("imgUrl");

  if (imgUrl.value != "") {
    img.src = imgUrl.value;
    return;
  }; });

  //to make image gide on button press
  //   if (imageDisplayed == true) {
  //     // var img = document.getElementById("img");
  //     img.style.display = "none";
  //     imageDisplayed = false;
  //     console.log(imageDisplayed);
  //     return;
  //   } else {
  //     // var img = document.getElementById("img");
  //     img.style.display = "block";
  //     imageDisplayed = true;
  //     console.log(imageDisplayed);
  //     return;
  //   }

  //activity 2
  // select color and update
  document.getElementById("colorBtn").addEventListener("click", function () {
    // alert("Print");
    var heading = document.getElementById("customH3");
    var color = document.getElementById("h3Color");
  
    if (color.value != "") {
        heading.style.color = color.value;
      return;
    }; });

    // function to display where clients x and y are
    // if scrolling the div it will just print put it also prints 
    // when clicked anywhere outside the container

    document.addEventListener("click", function ()  {
        var x = event.clientX;
        var y = event.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("demo").innerHTML = coor;
    }
    )
    function showCoords(event) {
        var x = event.clientX;
        var y = event.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("demo").innerHTML = coor;
      }
      
      function clearCoor() {
        document.getElementById("demo").innerHTML = "";
      }