/** 
  This page contains the functions for Northern Bayberry subpage.

  author: Abdunasr Yesuf (A00482825)
*/

let clickedButtonsCount = 0; // Counter to track clicked buttons
const totalButtons = 7; // Total number of buttons

/**
 * Places a button at a specified position within an image container and assigns event listeners to it.
 *
 * @param {number} xPercent - The horizontal position of the button as a percentage of the image width (0-100).
 * @param {number} yPercent - The vertical position of the button as a percentage of the image height (0-100).
 * @param {number} num - A unique identifier for the button, used to differentiate between multiple buttons.
 *
 * The function dynamically creates a button element, positions it based on the provided percentages,
 * and appends it to a container. It also assigns click event listeners to the button for swapping,
 * playing a sound if the button number is 7.
 */
function placeButton(xPercent, yPercent, num) {
  const imgElement = document.getElementById("imageDiv");
  imgWidth = imgElement.offsetWidth;
  imgHeight = imgElement.offsetHeight;

  document.getElementById("buttonDiv" + num).innerHTML =
    "<button id="
    + "tapMe" + num
    + " class=\"absolute top-["
    + parseInt((yPercent / 100) * imgHeight)
    + "px] left-["
    + parseInt((xPercent / 100) * imgWidth)
    + "px] py-4 px-4 bg-red-500 square-full\"></button>";
  
  document.getElementById("tapMe" + num).addEventListener("click", function () {
    swapButton(xPercent, yPercent, num);
    document.getElementById("buttonDiv" + num).id = "";
    clickedButtonsCount++; // Increment the counter when a button is clicked

    // Check if all buttons are clicked
    if (clickedButtonsCount === totalButtons) {
      win(); // Play the win sound
    }
  }, { once: true });

  document.getElementById("tapMe" + num).addEventListener("click", play, false);
}

function setup() {
  placeButton(75, 23, 1);
  placeButton(12, 42, 5);
  placeButton(21, 70, 4);
  placeButton(74, 70, 6);
  placeButton(82, 42, 7);
  placeButton(18, 23, 3);
  placeButton(47, 3, 2);
}

/**
 * Dynamically creates and inserts a button element into a specified container
 * with a unique ID and absolute positioning based on percentage values.
 *
 * @param {number} xPercent - The horizontal position of the button as a percentage of the container's width.
 * @param {number} yPercent - The vertical position of the button as a percentage of the container's height.
 * @param {number} num - A unique identifier used to generate the button's ID and target container.
 *
 * @throws {TypeError} If `imgHeight` or `imgWidth` is not defined in the global scope.
 * @throws {Error} If the target container with ID `buttonDiv<num>` does not exist in the DOM.
 */
function swapButton(xPercent, yPercent, num) {
    document.getElementById("buttonDiv" + num).innerHTML =
        "<button id="
        + "tapMe" + num
        + " class=\"absolute top-["
        + parseInt((yPercent / 100) * imgHeight)
        + "px] left-["
        + parseInt((xPercent / 100) * imgWidth)
        + "px] py-4 px-4 bg-green-500 rounded-full\"></button>";
}

/**
 * Plays the audio element with the ID "sound".
 * This function retrieves the audio element from the DOM
 * and triggers its playback.
 */
function play() {
    document.getElementById("sound").play();
}
/**
 * Plays the "win" audio element.
 * This function retrieves the HTML element with the ID "win"
 * and triggers its `play` method to play the associated audio.
 */
function win() {
    document.getElementById("win").play();
}