let doorsArray = document.querySelectorAll(".door");
// door variables:
let openImg = "/img/door-open-red.png";
let closeImg = "/img/door-closed-red.png";
//create goats and car vairables:
// car
let carImg = "/img/ferrari.png";
let car = document.createElement("img");
car.setAttribute("src", `${carImg}`);
car.className = "car";
// goat
let goatImg = "/img/goat1.png";
let goat = document.createElement("img");
goat.setAttribute("src", `${goatImg}`);
goat.className = "goat";
goat.cloneNode(true);
console.log(goat);
console.log(car);

//car.src = carImg;
//goat.src = goatImg;
//goat.style.display = "none";

// host text box
let hostSays = document.getElementById("hostSays");
// buttons
const chooseDoorBtn = document.getElementById("lockChoice");
const switchBtn = document.getElementById("switch-btn");
const stayBtn = document.getElementById("stay-btn");
/* create an  function that assigns goats and car to the door. 
    will need to give an image of the goat or car to the door
 */

function assignCarGoats() {
  let doorNumber = Math.floor(Math.random() * 3);
  //insideArry[doorNumber].src = carImg;
  // console.log(`src: ${insideArry[doorNumber].src}`);
  doorsArray[doorNumber].appendChild(car);
  /* doorsArray[doorNumber].appendChild(document.createElement("img")); */
  // setting a src attribute on the image gets rid of an unwanted border
  /*   doorsArray[doorNumber].firstElementChild.setAttribute(
    "src",
    "/img/ferrari.png"
  );
  doorsArray[doorNumber].firstElementChild.className = "car"; */
  // ASSIGNING GOATS TO DOORS cannot append preveiously made goat variable twice
  doorsArray.forEach(function(ele) {
    if (ele.childElementCount === 0) {
      ele.appendChild(goat.cloneNode(true));
      /* ele.appendChild(document.createElement("img"));
      ele.firstElementChild.setAttribute("src", "/img/goat1.png");
      ele.firstElementChild.className = "goat"; */
      ele.firstElementChild.style.display = "none";
    } //else ele.firstElementChild.style.display = "none";
  });
}
assignCarGoats();

let hostBlurbs = [
  "Are you sure that's the door you wan't to choose?",
  "It's alright, you can change if you want to.",
  "No rush, take your time.",
  "There's a 1/3 chance you'll get it right",
  "That's a 2/3 chance you'll get it wrong",
  "Okay, don't mean to rush you, but we gotta get going here."
];

let hostBlurbsCount = 0;
let clickedDoor;

/* ======== CHOOSE GOAT =========== */
function choose(clicked_id) {
  clickedDoor = document.getElementById(clicked_id);
  chooseDoorBtn.removeAttribute("disabled");
  for (let i = 0; i < doorsArray.length; i++) {
    if ((doorsArray[i].style.border = "5px solid blue")) {
      doorsArray[i].style.border = "none";
    }
  }

  if (clickedDoor.style.border != "5px solid blue") {
    clickedDoor.style.border = "5px solid blue";
  } else {
    clickedDoor.style.border = "none";
  }
  // host says:
  hostSays.innerHTML = hostBlurbs[hostBlurbsCount];
  if (hostBlurbsCount < hostBlurbs.length - 1) {
    hostBlurbsCount++;
  }
}

/* =========== REVEAL THE FIRST GOAT ================== */

function openGoat() {
  // chooseDoor button disabled & pointerEvents: 'none'
  chooseDoorBtn.setAttribute("disabled", true);
  chooseDoorBtn.style.pointerEvents = "none";
  //turn off the blue border on the doors & pointerEvents: 'none'
  for (let i = 0; i < doorsArray.length; i++) {
    //doorsArray[i].style.border = "none";
    doorsArray[i].style.pointerEvents = "none";
  }
  //switch and stay buttons enabled or displayed
  switchBtn.removeAttribute("disabled");
  stayBtn.removeAttribute("disabled");
  // need a host blurb to ask if player wants to switch
  // find a goat that is also not pickded
  console.log(`clickedDorrID: ${clickedDoor.id}`);
  for (let i = 0; i < doorsArray.length; i++) {
    if (
      doorsArray[i].id !== clickedDoor.id &&
      doorsArray[i].firstElementChild.className !== "car"
    ) {
      doorsArray[i].style.backgroundImage = `url(${openImg})`;
      doorsArray[i].firstElementChild.style.display = "block";
      console.log(doorsArray[i].childNodes);
      break;
    }
  }

  // reveal the goat (change closed door bg with open door bg goat display block)
  // all a function if switch or stay is clicked.
}

/* !!!!!!!!!!!!!!!! EXPERIMENTAL !!!!!!!!!!!!! */
//change the backround image for all .door classes randomly

/* function openClose() {
  for (let i = 0; i < x.length; i++) {
    let oc = Math.ceil(Math.random() * 2);
    console.log(oc);
    if (oc === 1) {
      x[i].style.backgroundImage = "url(/img/door-closed-red.png)";
    } else {
      x[i].style.backgroundImage = "url(/img/door-open-red.png)";
    }
  }
} */

// Random Door open/close trigger
/* for (let i = 0; i < 100; i++) {
  (function(i) {
    setTimeout(function() {
      openClose();
    }, 100 * i);
    //console.log(`Loop: ${i}`);
  })(i);
}
 */
/*  console.log(Math.floor(Math.random() * 3));

x[Math.floor(Math.random() * 3)].innerHTML = "Car";
for (let i = 0; i < x.length; i++) {
  if (x[i].innerHTML !== "Car") {
    x[i].innerHTML = "Goat";
  }
} 
console.log(`x[0] innerHTML: ${x[0].innerHTML}`);

  for (let i = 1; i < x.length; i++) {
  console.log(`${i} i%2 = ${i % 2}`);
  if (i % 2 === 0) {
    x[i - 1].innerHTML = "Even";
  }
}  */
