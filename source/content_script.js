function twentyPercentChance(){
  return (Math.floor(Math.random() * 5) == 0);
}

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
    if(twentyPercentChance()){
      getImg[i].classList.add("blurry");
    }
  }
}

function confuseNames() { 
  nameSpans = document.getElementsByClassName("fwb");
  firstNames = [];
  lastNames = [];

  for ( var i=0; i < nameSpans.length; i++) { 
    name = nameSpans[i].innerText;
    split = name.split(" ")
    first = split[0];

    split.shift();

    last = split.join(" ");

    firstNames.push(first);
    lastNames.push(last);
  };

  for (var i=0; i < nameSpans.length; i++) {
    firstRandomIndex = Math.floor(Math.random() * firstNames.length);
    lastRandomIndex = Math.floor(Math.random() * lastNames.length);

    first = firstNames[firstRandomIndex];
    last = lastNames[lastRandomIndex];

    link = nameSpans[i].children[0]

    if (link != undefined) {
      name = first + " " + last;

      link.text = name

      if(twentyPercentChance()){
        link.classList.add('textshadow');
      };
    } 
  };

  firstNames = [];
  lastNames = [];

};

function endAlz() {
  console.log("#EndAlz");
  addOverlay();
  makeBlurry();
  confuseNames();
}

setInterval(endAlz, 10000);
