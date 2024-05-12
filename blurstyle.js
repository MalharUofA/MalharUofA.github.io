document.addEventListener("DOMContentLoaded", function() {
    // Selecting the background image container for mobile view
    const mobileBackgroundImage = document.getElementById('mobileContainer');

    // Function to apply blur effect only in mobile view
    function applyBlurInMobileView() {
        if (mobileBackgroundImage) {
            const backgroundImage = mobileBackgroundImage.style.backgroundImage;
            let blurValue = 0;

            function increaseBlur() {
                blurValue += 1;
                mobileBackgroundImage.style.filter = `blur(${blurValue}px)`;
                if (blurValue < 10) {
                    setTimeout(increaseBlur, 1000); // Increase blur every second
                }
            }

            // Set timeout to start increasing blur after 10 seconds
            setTimeout(increaseBlur, 10000);
        }
    }

    // Call the function to apply blur effect only in mobile view
    applyBlurInMobileView();
});
