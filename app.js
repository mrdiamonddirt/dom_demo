//in javascript
const img = document.getElementById('img');
const change_image = function() {
  if (img.dataset.image == "user1") {
  	img.src = "/images/small.gif";
    img.dataset.image = "user2";
    return
  };
  
  if (img.dataset.image == "user2") {
  	img.src = "/images/user1.jpg";
    img.dataset.image = "user1";
    return
  };
};