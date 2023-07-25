let statusEle = document.getElementById("status");
let offEle = document.getElementById("off");
let onEle = document.getElementById("on");
let catImgEle = document.getElementById("cat_img");
let bulbImgEle = document.getElementById("bulb_img");

function on_btn() {
  onEle.style.backgroundColor = "green";
  offEle.style.backgroundColor = "grey";
  statusEle.textContent = "Switch ON";
  catImgEle.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  bulbImgEle.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
}

function off_btn() {
  offEle.style.backgroundColor = "red";
  onEle.style.backgroundColor = "grey";
  statusEle.textContent = "Switch OFF";
  catImgEle.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  bulbImgEle.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
}
