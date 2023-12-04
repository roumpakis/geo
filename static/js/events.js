let imagesLoaded = false;

// Function to fetch and update images when the button is clicked
async function updateImages() {
    try {
        const response = await fetch('http://localhost:5001/get_images'); // Update the URL
        const data = await response.json();
        const beforeImage = data.before_image;
        const afterImage = data.after_image;
        const mask_img = data.mask_img;

        // Update the "Before" and "After" images in the image container
        document.getElementById('beforeImage').src = `data:image/jpeg;base64,${beforeImage}`;
        document.getElementById('afterImage').src = `data:image/jpeg;base64,${afterImage}`;
        document.getElementById('mask_img').src = `data:image/jpeg;base64,${mask_img}`;
        document.getElementById('mask_img').opacity = 100;
        // Load the slider image
        if (!imagesLoaded) {
            document.getElementById('slider2').src = `data:image/jpeg;base64,${beforeImage}`;
            imagesLoaded = true;
        }
    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
}

document.getElementById('fetchImagesButton').addEventListener('click', () => {
    updateImages();
});

// Update the image visibility based on the slider value
const slider2 = document.getElementById('slider2');
const backgroundImg = document.getElementById('beforeImage');
const foregroundImg = document.getElementById('afterImage');

slider2.addEventListener('input', () => {
    const sliderValue = slider2.value;
    const backgroundVisibility = 100 - sliderValue;
    const foregroundVisibility = sliderValue;

    backgroundImg.style.opacity = backgroundVisibility / 100;
    foregroundImg.style.opacity = foregroundVisibility / 100;
});
// Existing JavaScript code...

// Additional styles for the input panel
const fetchImagesButton = document.getElementById('fetchImagesButton');
const disasterList = document.getElementById('disasterList');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const radius = document.getElementById('radius');
const submitButton = document.getElementById('submitButton');

// Update the image visibility based on the slider value
slider2.addEventListener('input', () => {
    const sliderValue = slider2.value;
    const backgroundVisibility = 100 - sliderValue;
    const foregroundVisibility = sliderValue;

    backgroundImg.style.opacity = backgroundVisibility / 100;
    foregroundImg.style.opacity = foregroundVisibility / 100;
});

// Attach the asynchronous function to the submit button click event
submitButton.addEventListener('click', handleSubmit);

// Function to display messages
function showMessage(type, message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `<div class="${type}-message">${message}</div>`;

    // Clear the message after a few seconds
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 5000); // Adjust the duration as needed
}
let imagesLoaded = false;

// Function to fetch and update images when the button is clicked
async function updateImages() {
    try {
        const response = await fetch('http://localhost:5001/get_images'); // Update the URL
        const data = await response.json();
        const beforeImage = data.before_image;
        const afterImage = data.after_image;
        const mask_img = data.mask_img;

        // Update the "Before" and "After" images in the image container
        document.getElementById('beforeImage').src = `data:image/jpeg;base64,${beforeImage}`;
        document.getElementById('afterImage').src = `data:image/jpeg;base64,${afterImage}`;
        document.getElementById('mask_img').src = `data:image/jpeg;base64,${mask_img}`;
        document.getElementById('mask_img').opacity = 100;
        // Load the slider image
        if (!imagesLoaded) {
            document.getElementById('slider2').src = `data:image/jpeg;base64,${beforeImage}`;
            imagesLoaded = true;
        }
    } catch (error) {
        console.error('Error fetching and displaying images:', error);
    }
}

document.getElementById('fetchImagesButton').addEventListener('click', () => {
    updateImages();
});

// Update the image visibility based on the slider value
const slider2 = document.getElementById('slider2');
const backgroundImg = document.getElementById('beforeImage');
const foregroundImg = document.getElementById('afterImage');

slider2.addEventListener('input', () => {
    const sliderValue = slider2.value;
    const backgroundVisibility = 100 - sliderValue;
    const foregroundVisibility = sliderValue;

    backgroundImg.style.opacity = backgroundVisibility / 100;
    foregroundImg.style.opacity = foregroundVisibility / 100;
});
// Existing JavaScript code...

// Additional styles for the input panel
const fetchImagesButton = document.getElementById('fetchImagesButton');
const disasterList = document.getElementById('disasterList');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const radius = document.getElementById('radius');
const submitButton = document.getElementById('submitButton');

// Update the image visibility based on the slider value
slider2.addEventListener('input', () => {
    const sliderValue = slider2.value;
    const backgroundVisibility = 100 - sliderValue;
    const foregroundVisibility = sliderValue;

    backgroundImg.style.opacity = backgroundVisibility / 100;
    foregroundImg.style.opacity = foregroundVisibility / 100;
});

// Attach the asynchronous function to the submit button click event
submitButton.addEventListener('click', handleSubmit);

// Function to display messages
function showMessage(type, message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `<div class="${type}-message">${message}</div>`;

    // Clear the message after a few seconds
    setTimeout(() => {
        messageContainer.innerHTML = '';
    }, 5000); // Adjust the duration as needed
}



