/*
Declare and initialize global variables containing respectively:
- the number of device pixels going across the screen
- the number of device pixels going down the screen
- the offset in pixels on the right side of the image needed to center the image
- the offset in pixels at the top side of the image needed to center the image
*/

function placeButton(xPercent, yPercent, num) {
    const imgElement = document.getElementById("imageDiv");
    imgWidth = imgElement.offsetWidth;
    imgHeight = imgElement.offsetHeight;

    // Place the button using the calculated position based on percentage of image size
    document.getElementById("buttonDiv" + num).innerHTML =
        "<button id="
        + "tapMe" + num
        + " class=\"absolute top-["
        + parseInt((yPercent / 100) * imgHeight + 160)
        + "px] left-["
        + parseInt((xPercent / 100) * imgWidth)
        + "px] py-3 px-3 bg-red-500 rounded-full border-solid border-2 border-neutral-300\"></button>";
    document.getElementById("tapMe" + num).addEventListener("click", function () {
        swapButton(xPercent, yPercent, num);
        document.getElementById("buttonDiv" + num).id = "";
    }, { once: true});
    document.getElementById("tapMe" + num).addEventListener("click", play, false);
    if (num === 11) {
        document.getElementById("tapMe" + num).addEventListener("click", finishedEffect, false);
    }
}

function setup() {
        placeButton(52, 96, 1)
    document.getElementById("buttonDiv1").addEventListener('click', function () {
        placeButton(52, 79, 2)
    })
    document.getElementById("buttonDiv2").addEventListener('click', function () {
        placeButton(36, 89, 3) 
    })
    document.getElementById("buttonDiv3").addEventListener('click', function () {
        placeButton(18, 76, 4) 
    })
    document.getElementById("buttonDiv4").addEventListener('click', function () { 
        placeButton(18, 46, 5) 
    })
    document.getElementById("buttonDiv5").addEventListener('click', function () {
        placeButton(36, 21, 6)
    })  
    document.getElementById("buttonDiv6").addEventListener('click', function () {
        placeButton(52, 9, 7)
    })
    document.getElementById("buttonDiv7").addEventListener('click', function () {
        placeButton(70, 23, 8)
    })
    document.getElementById("buttonDiv8").addEventListener('click', function () {
        placeButton(87, 46, 9) 
    })
    document.getElementById("buttonDiv9").addEventListener('click', function () {
        placeButton(87, 75, 10) 
    })
    document.getElementById("buttonDiv10").addEventListener('click', function () { 
        placeButton(70, 89, 11) 
    })
}

//The purpose of this function is to turn the button green.
function swapButton(xPercent, yPercent, num) {
    document.getElementById("buttonDiv" + num).innerHTML =
        "<button id="
        + "tapMe" + num
        + " class=\"absolute top-["
        + parseInt((yPercent / 100) * imgHeight + 164)
        + "px] left-["
        + parseInt((xPercent / 100) * imgWidth + 4)
        + "px] py-2 px-2 bg-neutral-500 rounded-full border border-2 border-green-500\"></button>";
}

//The purpose of this function is to play the sound effect.
function play() {
    document.getElementById("sound").play();
}

function finishedEffect() {
    const colors = ["bg-red-400","bg-orange-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-indigo-400","bg-purple-400"];
    let currentButton = 1;
    const setColors = setInterval(() => {
        if (currentButton < 3) {
            const button = document.getElementById("tapMe" + currentButton);
            button.classList.add(colors[currentButton - 1]);
        }
        else {
            const button = document.getElementById("tapMe" + currentButton);
            const button2 = document.getElementById("tapMe" + (14 - currentButton));
            button.classList.add(colors[currentButton - 1]);
            button2.classList.add(colors[currentButton - 1]);
        }
        currentButton = currentButton + 1;
        if (currentButton == 8) {
            clearInterval(setColors);
            document.getElementById("return").innerHTML = "Play Again";
            document.getElementById("return").classList.add("border-double", "border-8", "rounded-full");
        }
    }, 150);
    document.getElementById("finishedSound").play();
}