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

// Create an image, button, and input in your HTML. Change the
// source of the image to whatever image url is inside the input box
// when the button is clicked.

// Create a heading, button, and input in your HTML. Change the text
// colour of the heading to whatever colour is typed in the input when
// the button is clicked

// Using the event object, get the x and y coordinates of where you
// click on the page and display the values in a p tag.
// Hint: look into clientX and clientY


document.getElementById("myBtn").addEventListener("click", function () {
  // alert("Print");
  var img = document.getElementById("img");
  var imgUrl = document.getElementById("imgUrl");
  
  if (imgUrl.value != ""){
    img.src = imgUrl.value;
  }

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
});
