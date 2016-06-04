function addOverlay() {
  btn = document.createElement('a')
  btn.text = "#EndAlz"
  btn.href = "http://act.alz.org/site/TR?fr_id=8480&pg=entry"
  btn.id = 'end-alz-btn'

  document.body.appendChild(btn)
}

function makeBlurry() {
  var getImg = document.querySelectorAll("img");

  for (var i = 0; i < getImg.length; i++) {
      getImage[i].classList.add("blurry");
}

addOverlay();
makeBlurry();
