/* ------------------------ Image File Declarations ------------------------ */
var bridgeImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo07.jpg";
var countryImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo08.jpg";
var brickImg = "https://bytebucket.org/orvis_ecommerce/interview-packet/raw/10cb207462ee5c1e72eba25b3077b80641a12b5c/images/photo04.jpg";


document.addEventListener("DOMContentLoaded", function(event) {

/* ------------------------- Variable Declarations ------------------------- */
  var mainImg = document.getElementById("main-img");
  var mainImgGhost = document.getElementById("main-img-ghost");
  var subImg0 = document.getElementById("sub-img-0");
  var subImg0Ghost = document.getElementById("sub-img-0-ghost");
  var subImg1 = document.getElementById("sub-img-1");
  var subImg1Ghost = document.getElementById("sub-img-1-ghost");
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


  function crossFadeMain() {
    mainImgGhost.classList.remove("fade-out");
    mainImgGhost.style.opacity = "1";
    mainImgGhost.src = mainImg.src;

    setTimeout(function() {
      mainImgGhost.classList.add("fade-out");
    }, 0);
  }


  function crossFadeSub0() {
    subImg0Ghost.classList.remove("fade-out");
    subImg0Ghost.style.opacity = "1";
    subImg0Ghost.src = subImg0.src;

    setTimeout(function() {
      subImg0Ghost.classList.add("fade-out");
    }, 0);
  }


  function crossFadeSub1() {
    subImg1Ghost.classList.remove("fade-out");
    subImg1Ghost.style.opacity = "1.0";
    subImg1Ghost.src = subImg1.src;

    setTimeout(function() {
      subImg1Ghost.classList.add("fade-out");
    }, 0);
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

  subImg0Ghost.onclick = function() {
    crossFadeMain();
    crossFadeSub0();
    swapImages(subImg0);
  };

  subImg1Ghost.onclick = function() {
    crossFadeMain();
    crossFadeSub1();
    swapImages(subImg1);
  };

});
