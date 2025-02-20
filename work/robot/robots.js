// document.getElementById("lefteye").style.backgroundColor = "red";
// document.getElementById("head").style.transform = "rotate( 0deg)";

// document.getElementById("mouth").style.backgroundColor = "plum"

// document.getElementById("rightarm").style.left = "22%"

var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 36) {
            clearInterval(id);
        }
    }
}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 71) {
            clearInterval(id);
        }
    }
}

// Change body color when hovering over elements
// var mouthColor = document.getElementById("mouth");
function changeMouthColor() {
    document.getElementById("mouth").style.backgroundColor = "green";
}

// mouth
mouth.addEventListener("mouseover", function() {
    changeMouthColor(); // Change color on hover
});

function mouthColorBack() {
    document.getElementById("mouth").style.backgroundColor = "pink";
}

// mouth
mouth.addEventListener("mouseout", function() {
    mouthColorBack(); // Change color on hover
});
  

// Create an audio object
var music = new Audio('brz.mp3'); // Replace with your file path

// Play music when clicking on an element
rightEye.addEventListener("click", function () {
    moveUpDown(event);
    music.play();  // Start playing music
});

leftEye.addEventListener("click", function () {
    moveUpDown(event);
    music.play();
});

leftArm.addEventListener("click", function () {
    moveRightLeft(event);
    music.play();
});

rightArm.addEventListener("click", function () {
    moveUpDown(event);
    music.play();
});

rightEye.addEventListener("click", function () {
    moveUpDown(event);
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});