document.addEventListener("DOMContentLoaded", function () {
    const captchaImagesContainer = document.getElementById("captchaImages");
    const form = document.getElementById("captchaForm");
    const errorMessage = document.getElementById("errorMessage");

    // Define images with correct answers
    const images = [
        { src: ".images/Airrazor_A.jpg", correct: false },  // Incorrect Image
        { src: ".images/archadis_D.jpg", correct: true }, // Correct Image
        { src: ".images/bigshot_A.jpg", correct: false } // Incorrect Image
	{ src: ".images/Blitz_D.jpg", correct: true },  // Correct Image
        { src: ".images/Cheetor_A.jpg", correct: false }, // Incorrect Image
        { src: ".images/Primus.jpg", correct: false } // Incorrect Image
	{ src: ".images/VectorPrime_A.jpg", correct: false },  // Incorrect Image
        { src: ".images/RodMinor_A.jpg", correct: false }, // Incorrect Image
        { src: ".images/RodMinor2_A.jpg", correct: false } // Incorrect Image
    ];

    let selectedImage = null;

    // Display images
    images.forEach((image, index) => {
        let img = document.createElement("img");
        img.src = image.src;
        img.classList.add("captcha-image");
        img.dataset.correct = image.correct;
        img.addEventListener("click", () => {
            selectedImage = image.correct;
            document.querySelectorAll(".captcha-image").forEach(img => img.classList.remove("selected"));
            img.classList.add("selected");
        });
        captchaImagesContainer.appendChild(img);
    });

    // Form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (selectedImage === true) {
            window.location.href = "success.html";  // Redirect if correct
        } else {
            errorMessage.textContent = "Incorrect choice. Please try again.";
        }
    });
});
