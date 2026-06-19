document.addEventListener("DOMContentLoaded", function () {

// Home page welcome message
if (document.body.id === "home-page") {
    alert("Welcome to For The Youth! Empowering the future.");
}

// Image click functionality
const mainImage = document.querySelector("main img");

if (mainImage) {
    mainImage.addEventListener("click", function () {
        alert("Every child deserves access to education!");
    });
}

// Display current year in footer
const footer = document.querySelector("footer");

if (footer) {
    const yearParagraph = document.createElement("p");
    yearParagraph.textContent =
        "Current Year: " + new Date().getFullYear();
    footer.appendChild(yearParagraph);
}

// About page team members
const founder = document.getElementById("founder");

if (founder) {
    founder.addEventListener("click", function () {
        this.style.color = "purple";
        this.style.fontWeight = "bold";
    });
}

const director = document.getElementById("director");

if (director) {
    director.addEventListener("click", function () {
        this.style.color = "purple";
        this.style.fontWeight = "bold";
    });
}

// Form handling (Contact and Volunteer pages)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("msg");

        // Check if fields exist and are filled in
        if (
            (nameInput && nameInput.value.trim() === "") ||
            (emailInput && emailInput.value.trim() === "") ||
            (messageInput && messageInput.value.trim() === "")
        ) {
            alert("Please complete all fields before submitting.");
            return;
        }

        // Thank-you message
        if (nameInput) {
            alert(
                "Thank you, " +
                nameInput.value +
                "! Your submission has been received."
            );
        } else {
            alert("Thank you for your submission!");
        }

        form.reset();
    });
}

});
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}