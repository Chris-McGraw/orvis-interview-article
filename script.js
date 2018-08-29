document.addEventListener("DOMContentLoaded", function(event) {
  var mainImgContainer = document.getElementById("main-img-container");
  var subImg0 = document.getElementById("sub-img-0");
  var subImg1 = document.getElementById("sub-img-1");

  var bridgeImg = 'url("https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo07.jpg")';
  var countryImg = 'url("https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo08.jpg")';
  var brickImg = 'url("https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo04.jpg")';

  mainImgContainer.style.backgroundImage = bridgeImg;
  subImg0.style.backgroundImage = countryImg;
  subImg1.style.backgroundImage = brickImg;

  subImg0.onclick = function() {
    if(this.style.backgroundImage === countryImg && mainImgContainer.style.backgroundImage === bridgeImg) {
      this.style.backgroundImage = bridgeImg;

      mainImgContainer.style.backgroundImage = countryImg;
    }
    else if(this.style.backgroundImage === bridgeImg && mainImgContainer.style.backgroundImage === countryImg) {
      this.style.backgroundImage = countryImg;

      mainImgContainer.style.backgroundImage = bridgeImg;
    }


    else if(this.style.backgroundImage === countryImg && mainImgContainer.style.backgroundImage === brickImg) {
      this.style.backgroundImage = brickImg;

      mainImgContainer.style.backgroundImage = countryImg;
    }
    else if(this.style.backgroundImage === brickImg && mainImgContainer.style.backgroundImage === countryImg) {
      this.style.backgroundImage = countryImg;

      mainImgContainer.style.backgroundImage = brickImg;
    }
  };

  subImg1.onclick = function() {
    if(this.style.backgroundImage === brickImg && mainImgContainer.style.backgroundImage === bridgeImg) {
      this.style.backgroundImage = bridgeImg;

      mainImgContainer.style.backgroundImage = brickImg;
    }
    else if(this.style.backgroundImage === bridgeImg && mainImgContainer.style.backgroundImage === brickImg) {
      this.style.backgroundImage = brickImg;

      mainImgContainer.style.backgroundImage = bridgeImg;
    }


    else if(this.style.backgroundImage === brickImg && mainImgContainer.style.backgroundImage === countryImg) {
      this.style.backgroundImage = countryImg;

      mainImgContainer.style.backgroundImage = brickImg;
    }
    else if(this.style.backgroundImage === countryImg && mainImgContainer.style.backgroundImage === brickImg) {
      this.style.backgroundImage = brickImg;

      mainImgContainer.style.backgroundImage = countryImg;
    }
  };

});
