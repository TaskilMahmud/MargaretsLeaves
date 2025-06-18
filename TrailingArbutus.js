/* 
  to make sure the buttons work 
  set the postion of the buttons 
  the format of the lab is followed

  Author: Taskil Mahmud   A00478324
    Date: 31/03/2025
*/

let xDim = window.innerWidth;
let yDim = window.innerHeight;
let xOffset = (xDim - 300) / 2;
let yOffset = (yDim - 600) / 2;

function setup() {
   
    document.getElementById("imageDiv").innerHTML =
    "<img class=\"fixed w-64 h-64 object-cover rounded-full border-4 border-blue-500 top-[" 
    + yOffset + "px] left-[" + xOffset + "px]\" src=\"images/trailingArbutusLeaf.png\" alt=\"Trailing Arbutus\">";

    let centerX = xOffset + 128; 

    document.getElementById("Button1").innerHTML =
        "<button id=\"button1\" class=\"fixed top-[" + (yOffset + 15) + "px] left-[" + (centerX - 6) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button1").addEventListener("click", function () {
        document.getElementById("button1").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button2").innerHTML =
        "<button id=\"button2\" class=\"fixed top-[" + (yOffset + 35) + "px] left-[" + (centerX - 55) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button2").addEventListener("click", function () {
        document.getElementById("button2").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button3").innerHTML =
        "<button id=\"button3\" class=\"fixed top-[" + (yOffset + 35) + "px] left-[" + (centerX + 33) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button3").addEventListener("click", function () {
        document.getElementById("button3").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button4").innerHTML =
        "<button id=\"button4\" class=\"fixed top-[" + (yOffset + 85) + "px] left-[" + (centerX - 82) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button4").addEventListener("click", function () {
        document.getElementById("button4").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button5").innerHTML =
        "<button id=\"button5\" class=\"fixed top-[" + (yOffset + 85) + "px] left-[" + (centerX + 62) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button5").addEventListener("click", function () {
        document.getElementById("button5").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button6").innerHTML =
        "<button id=\"button6\" class=\"fixed top-[" + (yOffset + 135) + "px] left-[" + (centerX + 64) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button6").addEventListener("click", function () {
        document.getElementById("button6").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button7").innerHTML =
        "<button id=\"button7\" class=\"fixed top-[" + (yOffset + 135) + "px] left-[" + (centerX - 81) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button7").addEventListener("click", function () {
        document.getElementById("button7").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button8").innerHTML =
        "<button id=\"button8\" class=\"fixed top-[" + (yOffset + 185) + "px] left-[" + (centerX - 54) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button8").addEventListener("click", function () {
        document.getElementById("button8").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button9").innerHTML =
        "<button id=\"button9\" class=\"fixed top-[" + (yOffset + 185) + "px] left-[" + (centerX + 41) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button9").addEventListener("click", function () {
        document.getElementById("button9").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button10").innerHTML =
        "<button id=\"button10\" class=\"fixed top-[" + (yOffset + 208) + "px] left-[" + (centerX - 5) + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button10").addEventListener("click", function () {
        document.getElementById("button10").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
    document.getElementById("Button11").innerHTML =
        "<button id=\"button11\" class=\"fixed top-[" + (yOffset + 235) + "px] left-[" + centerX + "px] py-1 px-1 bg-red-500 rounded-full\"></button>";
    document.getElementById("button11").addEventListener("click", function () {
        document.getElementById("button11").classList.replace("bg-red-500", "bg-green-500");
        play();
    });
    
        
}

function play() {
    document.getElementById("sound").play();
}
