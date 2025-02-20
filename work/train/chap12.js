var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {

    if (currentPosition >= 418) {
        alert("OOOOF!");
        console.log("Crash!");
        clearInterval(animation);
        resetTrain();
    }
}

function stopTrain() {
    if (trainPosition < 418) {
        clearInterval(animation);
    }
}

function resetTrain() {
    trainSpeed = 250;
    trainPosition = 0;
    train.style.left = '0px';
}

// function greet(name, surNme) {
//     console.log("Hello" + name + surNme);
// };

// // greet(" Kelly", " Keet");

// function addition(x, y) {
//     console.log(x * y)
// }
// addition(3, 4)

// var trainSpeed = 250;
// var trainPosition = 0;
// var animation;

// var train = document.getElementById("train");
// train.addEventListener("click", speedUp);

// var stopButton = document.getElementById("stopButton");
// stopButton.addEventListener("click", stopTrain);

// function speedUp() {
//     if (trainSpeed > 10) {
//         trainSpeed -= 10; // Speed up the train
//     }

//     console.log("Train speed: " + trainSpeed);

//     clearInterval(animation); // Stop old animation
//     animation = setInterval(frame, trainSpeed); // Restart with new speed
// }

// function frame() {
//     trainPosition += 2;
//     train.style.left = trainPosition + "px";
//     console.log(trainPosition);
//     checkPosition(trainPosition);
// }

// function checkPosition(currentPosition) {
//     if (currentPosition >= 408) {
//         alert("OOOOO! Crash! 🚆💥");

//         clearInterval(animation); // Stop the train

//         // Restart after a short delay
//         setTimeout(restartTrain, 1000); // Wait 1 second, then restart
//     }
// }

// function restartTrain() {
//     trainPosition = 0; // Reset train position
//     train.style.left = "0px"; // Move train back to start
//     trainSpeed = 250; // Reset speed

//     console.log("Restarting train...");

//     // Restart animation
//     animation = setInterval(frame, trainSpeed);
// }

// // Stop function (if needed)
// function stopTrain() {
//     clearInterval(animation);
// }
