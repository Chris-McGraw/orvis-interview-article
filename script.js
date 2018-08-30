document.addEventListener("DOMContentLoaded", function(event) {
  var mainImg = document.getElementById("main-img");
  var subImg0 = document.getElementById("sub-img-0");
  var subImg1 = document.getElementById("sub-img-1");

  var bridgeImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo07.jpg";
  var countryImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo08.jpg";
  var brickImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo04.jpg";

  setTimeout(function() {
    mainImg.src = bridgeImg;
    subImg0.src = countryImg;
    subImg1.src = brickImg;
  }, 0);

  function swapImages(subImg) {
    if(subImg.src === countryImg && mainImg.src === bridgeImg) {
      subImg.src = bridgeImg;
      mainImg.src = countryImg;
    }
    else if(subImg.src === bridgeImg && mainImg.src === countryImg) {
      subImg.src = countryImg;
      mainImg.src = bridgeImg;
    }

    else if(subImg.src === countryImg && mainImg.src === brickImg) {
      subImg.src = brickImg;
      mainImg.src = countryImg;
    }
    else if(subImg.src === brickImg && mainImg.src === countryImg) {
      subImg.src = countryImg;
      mainImg.src = brickImg;
    }

    else if(subImg.src === brickImg && mainImg.src === bridgeImg) {
      subImg.src = bridgeImg;
      mainImg.src = brickImg;
    }
    else if(subImg.src === bridgeImg && mainImg.src === brickImg) {
      subImg.src = brickImg;
      mainImg.src = bridgeImg;
    }

    else if(subImg.src === brickImg && mainImg.src === countryImg) {
      subImg.src = countryImg;
      mainImg.src = brickImg;
    }
    else if(subImg.src === countryImg && mainImg.src === brickImg) {
      subImg.src = brickImg;
      mainImg.src = countryImg;
    }
  }



  subImg0.onclick = function() {
    swapImages(subImg0);
  };

  subImg1.onclick = function() {
    swapImages(subImg1);
  };

});
