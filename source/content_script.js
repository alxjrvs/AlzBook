jokes = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
]

function twentyPercentChance(){
  return (Math.floor(Math.random() * 5) == 0);
}

function addOverlay() {
  btn = document.createElement('a')
  btn.text = "#EndAlz"
  btn.href = "http://act.alz.org/site/TR?fr_id=8480&pg=entry"
  btn.id = 'end-alz-btn'
  btn.target = "_blank"

  document.body.appendChild(btn)
}

function makeBlurry() {
  var getImg = document.querySelectorAll("img");

  for (var i = 0; i < getImg.length; i++) {

    if(twentyPercentChance()){
      getImg[i].classList.toggle("blurry");
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

    if (first == undefined || first == "") {
      first = "Sam"
    };

    if (last == undefined || last == "") {
      last = "Kent"
    };

    link = nameSpans[i].children[0]

    if (link != undefined) {
      name = first + " " + last;
      if (name == undefined || name == "") {
        name = "Sam Kent"
      } 
      link.text = name

      if(twentyPercentChance()){
        link.classList.toggle('textshadow');
      };
    }
  };

  firstNames = [];
  lastNames = [];

};


function tellJoke() { 
  if(twentyPercentChance()) { 
    index = Math.floor(Math.random() * jokes.length);
    alert(jokes[index]);
  }
}

function endAlz() {
  console.log("#EndAlz");
  makeBlurry();
  confuseNames();
  tellJoke();
}

setInterval(endAlz, 7000);
