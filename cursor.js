const links = document.getElementsByTagName("a");
let currentLinkIndex = -1;

// Function to handle arrow key events
function handleArrowKeys(event) {
    switch (event.key) {
        case "ArrowUp":
            navigateLinks(-1); // Move to the previous link
            break;
        case "ArrowDown":
            navigateLinks(1); // Move to the next link
            break;
    }
}

// Function to navigate to the next/previous link
function navigateLinks(step) {
    currentLinkIndex += step;

    // Ensure the index doesn't go out of bounds
    if (currentLinkIndex < 0) {
        currentLinkIndex = 0;
    } else if (currentLinkIndex >= links.length) {
        currentLinkIndex = links.length - 1;
    }

    // Focus on the selected link
    links[currentLinkIndex].focus();
}

// Add an event listener to capture arrow key events
document.addEventListener("keydown", handleArrowKeys);

// Initialize focus on the first link
navigateLinks(1);
