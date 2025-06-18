/* 
   The purpose of this file is to update the configuration file with customizations.

   Edit this JSON to set custom styles, when required.

   @author: S M Riyad Farhan (CLART 2025)
*/


tailwind.config = {
    theme: {
      fontFamily: {
        sans: ['Calibri'],
        mono: ['Courier New']
      }
    }
}
function setup() {
    const buttons = document.querySelectorAll('[id^="btn"]');
    const sound = new Audio("whistle.mp3");
    const allClickedSound = new Audio("successtrmp.mp3");

    const clickedButtons = new Set(); // Set to keep track of clicked buttons
    const progressBar = document.getElementById('progressBar'); // Progress bar element
    const wellDoneOverlay = document.getElementById('wellDoneOverlay'); // Well done overlay

    // Function to update progress bar
    function updateProgressBar() {
        const progress = (clickedButtons.size / buttons.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Check if the progress has reached 100%
        if (progress === 100) {
            // Once completed, change the progress bar color to red
            progressBar.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-lime-500');
            progressBar.classList.add('bg-red-500');
        }
    }

    function playSoundAndChangeColor(event) {
        const clickedButton = event.target;

        if (clickedButtons.has(clickedButton.id)) {
            return;
        }

        const isLastButton = clickedButtons.size === buttons.length - 1;

        if (!isLastButton) {
            sound.pause();
            sound.currentTime = 0;
            sound.play();
        }

        // Change color of clicked button
        clickedButton.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-white');
        clickedButton.classList.add(
            "bg-gradient-to-r", "from-gray-400", "to-white", "scale-125",
            "transition-transform", "duration-200"
        );

        clickedButtons.add(clickedButton.id);

        // Update progress bar
        updateProgressBar();

        // Check if all buttons have been clicked
        if (clickedButtons.size === buttons.length) {
            allClickedSound.pause();
            allClickedSound.currentTime = 0;
            allClickedSound.play();

            // Show the "Well Done" overlay
            showWellDoneOverlay();
        }
    }

    function showWellDoneOverlay() {
        wellDoneOverlay.classList.remove('hidden'); // Show the overlay

        // Hide the overlay after 3 seconds
        setTimeout(() => {
            wellDoneOverlay.classList.add('hidden');
        }, 3000); // 3000ms = 3 seconds
    }

    buttons.forEach(button => {
        button.addEventListener("click", playSoundAndChangeColor);
    });
}
