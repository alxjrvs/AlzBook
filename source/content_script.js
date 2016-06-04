jokes = [
  "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.",
  "Always borrow money from a pessimist. He won’t expect it back.",
  "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
  "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
  "First the doctor told me the good news: I was going to have a disease named after me.",
  "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.",
  "Dogs have masters. Cats have staff.",
  "if you carn't have midnight snack why do we have a light in the fridge ??",
  "When I lost my rifle, the Army charged me $85. That’s why in the Navy, the captain goes down with the ship.",
  "A conference call is the best way for a dozen people to say 'bye' 300 times."
]

alzLink = "http://act.alz.org/site/TR?fr_id=8480&pg=entry"

function twentyPercentChance(){
  return (Math.floor(Math.random() * 5) == 0);
}

function addOverlay() {
  btn = document.createElement('a')
  btn.text = "#EndAlz"
  btn.href = alzLink
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
      console.log(link.text + " is Now " + name);
      link.text = name

      if(twentyPercentChance()){
        link.classList.toggle('textshadow');
      };
    }
  };

  firstNames = [];
  lastNames = [];

};


function confuseLinks(){
  links = document.getElementsByTagName('a');

  for (var i = 0; i < links.length; i++) { 
    if (twentyPercentChance()) {
      link = links[i]
      randomHref = links[Math.floor(Math.random() * links.length)].href
      if (link.href != alzLink) { 
        link.href = randomHref;
        console.log(link.text + " now goes to " + randomHref);
      }
    };
  };

}

function tellJoke() { 
  if(twentyPercentChance()) { 
    index = Math.floor(Math.random() * jokes.length);
    alert(jokes[index]);
  }
}

function endAlz() {
  console.log("#EndAlz");
  addOverlay();
  makeBlurry();
  confuseNames();
  tellJoke();
  confuseLinks();
}

setInterval(endAlz, 7000);
