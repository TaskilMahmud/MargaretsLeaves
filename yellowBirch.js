/*
The purpose of this file is to:
    - place the image in the center regardless of the smartphone
    - place the button on the arc regardless of the smartphone
    - set up event listener for click
    - set up event listener for sound
    - reload page on orientation change

    Author: Mark Louis Tabudlong (A00468931)
*/

/*
    The purpose of this function is to detect orientation change and reload page to reset button placements
*/
function handleOrientationChange() {
    // Check if the window's width and height have swapped
    if (window.innerWidth !== window.innerHeight) {
        window.location.reload();
    }
}

/*
The purpose of this function is to place the button onto the image. Uses percentage of image width/height to avoid interference with resolution changing
*/
function placeButton(xPercent, yPercent, num) {
    const imgElement = document.getElementById("imageDiv");
    imgWidth = imgElement.offsetWidth;
    imgHeight = imgElement.offsetHeight;

    // Place the button using the calculated position based on percentage of image size
    document.getElementById("buttonDiv" + num).innerHTML =
        "<button id=" + "tapMe" + num +
        " class=\"absolute top-[" + parseInt((yPercent / 100) * imgHeight) +
        "px] left-[" + parseInt((xPercent / 100) * imgWidth) +
        "px] py-4 px-4 bg-yellow-500 rounded-full\"></button>";

    document.getElementById("tapMe" + num).addEventListener("click", function () {
        swapButton(xPercent, yPercent, num);
        document.getElementById("buttonDiv" + num).id = ""; // Remove ID of button when clicked, so the button is not clickable again
    });

    document.getElementById("tapMe" + num).addEventListener("click", play, false);

    // Play finished effects when last button is clicked (7th button)
    if (num === 7) {
        document.getElementById("tapMe" + num).addEventListener("click", finishedEffect, false);
    }
}

function setup() {
    // Shows the next button as each one is clicked
    placeButton(78, 3, 1);
    document.getElementById("buttonDiv1").addEventListener('click', function () {
        placeButton(48, 85, 5);
    });

    document.getElementById("buttonDiv2").addEventListener('click', function () {
        placeButton(18, 67, 4);
    });

    document.getElementById("buttonDiv3").addEventListener('click', function () {
        placeButton(76, 70, 6);
    });

    document.getElementById("buttonDiv4").addEventListener('click', function () {
        placeButton(80, 37, 7);
    });

    document.getElementById("buttonDiv5").addEventListener('click', function () {
        placeButton(15, 30, 3);
    });

    document.getElementById("buttonDiv6").addEventListener('click', function () {
        placeButton(40, 11, 2);
    });

    // Event listener for orientation change
    window.addEventListener('resize', handleOrientationChange);
}

/*
The purpose of this function is to turn the button green.
*/
function swapButton(xPercent, yPercent, num) {
    document.getElementById("buttonDiv" + num).innerHTML =
        "<button id=" + "tapMe" + num +
        " class=\"absolute top-[" + parseInt((yPercent / 100) * imgHeight) +
        "px] left-[" + parseInt((xPercent / 100) * imgWidth) +
        "px] py-4 px-4 bg-green-500 rounded-full\"></button>";
}

/*
The purpose of this function is to play the sound effect.
*/
function play() {
    sound.currentTime = 0;
    document.getElementById("sound").play();
}

/*
The purpose of this function is to add effects when each button is clicked.
-Each button turns into a color in the rainbow, counterclockwise.
-Play Again is shown when game is finished
*/
function finishedEffect() {
    const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-green-400", "bg-blue-400", "bg-indigo-400", "bg-purple-400"];

    let currentButton = 1;
    const setColors = setInterval(() => {
        const button = document.getElementById("tapMe" + currentButton);
        button.classList.add(colors[currentButton - 1]);
        currentButton = currentButton + 1;
        if (currentButton == 8) {
            clearInterval(setColors);
            document.getElementById("playAgain").innerHTML =
                "<form action=" + "./homepage.html>" +
                "<button type=" + "submit" +
                " class=\"bg-yellow-500 text-white text-2xl font-mono font-bold py-5 px-20 rounded-lg shadow-md\">" +
                "Play Again</button></form>";
        }
    }, 100);
    document.getElementById("finishedSound").play();
}
