document.getElementById("scissor").addEventListener("click", function() {
    var orangeBox = document.querySelector(".orange-box"); 
   
    var image = document.createElement("img");
    
    image.src = "scissors-hand.png"; 
    image.classList.add("inserted-image");
   
    image.style.width = "500px"; // Set width to 100px (adjust as needed)
    image.style.height = "auto"; // Maintain aspect ratio
    // Check if there's already an image, if so, remove it
    var existingImage = orangeBox.querySelector(".inserted-image");
    if (existingImage) {
        existingImage.remove();
    }
    // Append the image to the orange box
    orangeBox.appendChild(image);
});
document.getElementById("paper").addEventListener("click", function() {
    var orangeBox = document.querySelector(".orange-box"); // Selecting the orange box
    // Create an image element
    var image = document.createElement("img");
    // Set the src attribute of the image
    image.src = "paper-hand.png"; // Replace with the path to your image
    image.classList.add("inserted-image");
    // Set the width and height of the image
    image.style.width = "500px"; // Set width to 100px (adjust as needed)
    image.style.height = "auto"; // Maintain aspect ratio
    // Check if there's already an image, if so, remove it
    var existingImage = orangeBox.querySelector(".inserted-image");
    if (existingImage) {
        existingImage.remove();
    }
    // Append the image to the orange box
    orangeBox.appendChild(image);
});
document.getElementById("rock").addEventListener("click", function() {
    var orangeBox = document.querySelector(".orange-box"); // Selecting the orange box
    // Create an image element
    var image = document.createElement("img");
    // Set the src attribute of the image
    image.src = "rock-hand.png"; // Replace with the path to your image
    image.classList.add("inserted-image");
    // Set the width and height of the image
    image.style.width = "500px"; // Set width to 100px (adjust as needed)
    image.style.height = "auto"; // Maintain aspect ratio
    // Check if there's already an image, if so, remove it
    var existingImage = orangeBox.querySelector(".inserted-image");
    if (existingImage) {
        existingImage.remove();
    }
    // Append the image to the orange box
    orangeBox.appendChild(image);
});

const handSignsData = {
    scissors: "scissors-hand.png",
    paper: "paper-hand.png",
    rock: "rock-hand.png"
};

// Function to generate a random hand sign
function generateRandomHandSign() {
    const handSigns = Object.keys(handSignsData);
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    return handSigns[randomIndex];
}


document.getElementById("scissor").addEventListener("click", function() {
    const computerSignBox = document.getElementById("computer-sign");
    const orangeBox = document.querySelector(".orange-box1");
    
   
    const randomSign = generateRandomHandSign();
    
   
    const signImage = document.createElement("img");
    signImage.src = handSignsData[randomSign];
    signImage.alt = randomSign; 
    signImage.classList.add("inserted-image");
    
    signImage.style.width = "500px"; 
    signImage.style.height = "auto";
   
    orangeBox.innerHTML = '';
    orangeBox.appendChild(signImage);

    
});
document.getElementById("paper").addEventListener("click", function() {
    const computerSignBox = document.getElementById("computer-sign");
    const orangeBox = document.querySelector(".orange-box1");
    
   
    const randomSign = generateRandomHandSign();
    
   
    const signImage = document.createElement("img");
    signImage.src = handSignsData[randomSign];
    signImage.alt = randomSign;
    signImage.classList.add("inserted-image");
    
    signImage.style.width = "500px"; 
    signImage.style.height = "auto";
   
    orangeBox.innerHTML = '';
    orangeBox.appendChild(signImage);

    
});
document.getElementById("rock").addEventListener("click", function() {
    const computerSignBox = document.getElementById("computer-sign");
    const orangeBox = document.querySelector(".orange-box1");
    
   
    const randomSign = generateRandomHandSign();
    
   
    const signImage = document.createElement("img");
    signImage.src = handSignsData[randomSign];
    signImage.alt = randomSign;
    signImage.classList.add("inserted-image");
    
    signImage.style.width = "500px"; 
    signImage.style.height = "auto";
   
    orangeBox.innerHTML = '';
    orangeBox.appendChild(signImage);

    
});

