document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for your message, " + name + "!");
    document.getElementById("contact-form").reset(); // Clear form after submission
});


// Dropdown Menu Interactivity
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Show the dropdown menu on hover
    dropdown.addEventListener("mouseover", function () {
        dropdownMenu.style.display = "block";
    });

    // Hide the dropdown menu when the mouse leaves
    dropdown.addEventListener("mouseout", function () {
        dropdownMenu.style.display = "none";
    });
});
