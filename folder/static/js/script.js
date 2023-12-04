       let imagesLoaded = false;

        // Function to fetch and update images when the button is clicked
        async function updateImages() {
            try {
                const response = await fetch('http://localhost:5001/get_images'); // Update the URL
                const data = await response.json();
                const beforeImage = data.before_image;
                const afterImage = data.after_image;

                // Update the "Before" and "After" images in the first container
                document.getElementById('beforeImage').src = `data:image/jpeg;base64,${beforeImage}`;
                document.getElementById('afterImage').src = `data:image/jpeg;base64,${afterImage}`;

                // Load the slider image
                if (!imagesLoaded) {
                    document.getElementById('slider').src = `data:image/jpeg;base64,${beforeImage}`;
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