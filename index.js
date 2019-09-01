const doorsArray = document.querySelectorAll(".door");
// door variables:
const openImg = "/img/door-open-red.png";
const closeImg = "/img/door-closed-red.png";
//create goats and car vairables:
// car
const carImg = "/img/ferrari.png";
const car = document.createElement("img");
car.setAttribute("src", `${carImg}`);
car.className = "car";
// goat
const goatImg = "/img/goat1.png";
const goat = document.createElement("img");
goat.setAttribute("src", `${goatImg}`);
goat.className = "goat";
goat.cloneNode(true);

//car.src = carImg;
//goat.src = goatImg;
//goat.style.display = "none";

// buttons
const chooseDoorBtn = document.getElementById("lockChoice");
const switchBtn = document.getElementById("switch-btn");
const stayBtn = document.getElementById("stay-btn");
// switch and stay event listeners
switchBtn.addEventListener("click", switchFunc);
stayBtn.addEventListener("click", stayFunc);

// host text box
let hostSays = document.getElementById("hostSays");
// buttons

/* create an  function that assigns goats and car to the door. 
    will need to give an image of the goat or car to the door
 */
/* ============= ASSING CAR/GOATS TO DOORS ============= */
let carDoorId;
function assignCarGoats() {
  let doorNumber = Math.floor(Math.random() * 3);
  //insideArry[doorNumber].src = carImg;
  // console.log(`src: ${insideArry[doorNumber].src}`);
  doorsArray[doorNumber].appendChild(car);
  doorsArray[doorNumber].className += " hasCar";
  carDoorId = doorsArray[doorNumber].id;
  console.log(
    `Door Object${doorsArray[doorNumber]} Id of door with car ${carDoorId}`
  );
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
let clickedDoorId;
/* ======== CHOOSE DOOR (HIGHLIGHT IT) =========== */
function choose(clicked_id) {
  clickedDoor = document.getElementById(clicked_id);
  clickedDoor.className += " doorBorder";
  clickedDoorId = clickedDoor.id;
  console.log(`Clicked Door:${clickedDoor}  Clicked Door ID: ${clickedDoorId}`);
  //Activate the button to lockin choice
  chooseDoorBtn.removeAttribute("disabled");
  for (let i = 0; i < doorsArray.length; i++) {
    if (doorsArray[i].id != clickedDoorId) {
      doorsArray[i].classList.remove("doorBorder");
    }
  }

  /* if (clickedDoor.style.border != "5px solid blue") {
    clickedDoor.style.border = "5px solid blue";
    console.log(clickedDoor.classList[1]);
  } else {
    clickedDoor.style.border = "none";
  } */
  // host says:
  hostSays.innerHTML = hostBlurbs[hostBlurbsCount];
  if (hostBlurbsCount < hostBlurbs.length - 1) {
    hostBlurbsCount++;
  }
}

/* =========== REVEAL THE FIRST GOAT ================== */
let revealedGoat;
let revealedGoatId;
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
      revealedGoatId = doorsArray[i].id;
      console.log(doorsArray[i].childNodes);
      break;
    }
  }

  // reveal the goat (change closed door bg with open door bg goat display block)
  // all a function if switch or stay is clicked.
}

/* ========= SWITCH FUNCTION ========== */
function switchFunc() {
  //alert(`Reveald Goat Id: ${revealedGoatId}`);
  clickedDoor.classList.remove("doorBorder");
  for (let i = 0; i < doorsArray.length; i++) {
    if (
      doorsArray[i].id !== clickedDoorId &&
      doorsArray[i].id !== revealedGoatId
    ) {
      doorsArray[i].className += " doorBorder";
    }
  }
  switchBtn.setAttribute("disabled", true);
  stayBtn.setAttribute("disabled", true);

  //console.log(switchBtn);
}
/* ^^^^^^^^ SWITCH FUNCTION ^^^^^^^^^^^^ */

/* ======== STAY FUNCTION =========== */
function stayFunc() {
  //console.log(`hello`);
  //alert(`You chosen to stay`);
}
/* ^^^^^^^^^^^^^ STAY FUNCTION ^^^^^^^^^^ */
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
