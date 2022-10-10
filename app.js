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

document.getElementById("myBtn").addEventListener("click", function () {
  // alert("Print");
  var img = document.getElementById("img");

  if (imageDisplayed == true) {
    // var img = document.getElementById("img");
    img.style.display = "none";
    imageDisplayed = false;
    console.log(imageDisplayed);
    return;
  } else {
    // var img = document.getElementById("img");
    img.style.display = "block";
    imageDisplayed = true;
    console.log(imageDisplayed);
    return;
  }
});
