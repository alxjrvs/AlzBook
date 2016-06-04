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
      getImg[i].classList.add("blurry");
    }
}

function confuseNames() { 
  nameSpans = document.getElementsByClassName("fwb fcg");
  firstNames = [];
  lastNames = [];

  for ( var i=0; i < nameSpans.length; i++) { 
    name = nameSpans[i].innerText;
    split = name.split(" ")
    first = split[0];
    last = split[1];
    firstNames.push(first);
    lastNames.push(last);
  };

  for (var i=0; i < nameSpans.length; i++) {
    firstRandomIndex = Math.floor(Math.random() * firstNames.length);
    lastRandomIndex = Math.floor(Math.random() * lastNames.length);

    first = firstNames.splice(firstRandomIndex, 1);
    last = lastNames.splice(lastRandomIndex, 1);

    name = first + last;
    link = nameSpan[i].children[0]
    link.text = name;

    blur = (Math.floor(Math.random() * 2) == 0);

    if(blur){
      link.classList.add('textshadow');
    };
  };
};


// blurText();
addOverlay();
makeBlurry();
