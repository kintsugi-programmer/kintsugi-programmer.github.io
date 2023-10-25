// Get all anchor (link) elements on the page
const links = document.getElementsByTagName("a");

// Initialize the currentLinkIndex to -1 (no link focused initially)
let currentLinkIndex = -1;

// Function to handle arrow key events
function handleArrowKeys(event) {
    switch (event.key) {
        case "ArrowUp":
            navigateLinks(-1); // Move to the previous link when the up arrow key is pressed
            break;
        case "ArrowDown":
            navigateLinks(1); // Move to the next link when the down arrow key is pressed
            break;
    }
}

// Function to navigate to the next/previous link
function navigateLinks(step) {
    currentLinkIndex += step;

    // Ensure the index doesn't go out of bounds
    if (currentLinkIndex < 0) {
        currentLinkIndex = 0; // Don't go below the first link
    } else if (currentLinkIndex >= links.length) {
        currentLinkIndex = links.length - 1; // Don't go beyond the last link
    }

    // Focus on the selected link
    links[currentLinkIndex].focus();
}

// Add an event listener to capture arrow key events when any key is pressed
document.addEventListener("keydown", handleArrowKeys);

// Initialize focus on the first link by moving to the next link (1)
navigateLinks(1);
