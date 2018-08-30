/* ------------------------ Image File Declarations ------------------------ */
var bridgeImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo07.jpg";
var countryImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo08.jpg";
var brickImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo04.jpg";


document.addEventListener("DOMContentLoaded", function(event) {

/* ------------------------- Variable Declarations ------------------------- */
  var mainImg = document.getElementById("main-img");
  var subImg0 = document.getElementById("sub-img-0");
  var subImg1 = document.getElementById("sub-img-1");
  var articleBlockTop = document.getElementById("article-block-top");
  var articleBlockBottom = document.getElementById("article-block-bottom");
  var articleBlockGhost = document.getElementById("article-block-ghost");


/* ------------------------- Function Declarations ------------------------- */
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


/* ----------------------- Progressive Image Loading ----------------------- */
  setTimeout(function() {
    mainImg.src = bridgeImg;
    subImg0.src = countryImg;
    subImg1.src = brickImg;
  }, 0);


/* ----------------------- Initial Window Size Check ----------------------- */
  if(window.innerWidth <= 1020) {
    articleBlockTop.classList.add("hidden");
    articleBlockBottom.classList.add("hidden");

    articleBlockGhost.classList.remove("hidden");
  }


/* ---------------------------- Event Handlers ---------------------------- */
  window.onresize = function(event) {
    if(window.innerWidth <= 1020) {
      articleBlockTop.classList.add("hidden");
      articleBlockBottom.classList.add("hidden");

      articleBlockGhost.classList.remove("hidden");
    }
    else if(window.innerWidth > 1020) {
      articleBlockTop.classList.remove("hidden");
      articleBlockBottom.classList.remove("hidden");

      articleBlockGhost.classList.add("hidden");
    }
  }

  subImg0.onclick = function() {
    swapImages(subImg0);
  };

  subImg1.onclick = function() {
    swapImages(subImg1);
  };

});
