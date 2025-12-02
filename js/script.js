console.log("Portfolio loaded for Somya.");

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.style.color = "red";
        status.textContent = "Please fill all the fields!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        status.style.color = "red";
        status.textContent = "Please enter a valid email!";
        return;
    }

    status.style.color = "green";
    status.textContent = "Message sent successfully!";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
