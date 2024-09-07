// Select the button and div elements
let colorButton = document.getElementById("colorButton");
let colorDiv = document.getElementById("colorDiv");

// Add an event listener to the button for the 'click' event
colorButton.onclick = function() {
    // Generate a random color
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Change the background color of the div
    colorDiv.style.backgroundColor = randomColor;
};
