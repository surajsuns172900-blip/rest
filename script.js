// Set current year in footer on all pages
var yearSpan = document.getElementById("year");
if (yearSpan) {
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Simple form handling on book.html
var form = document.getElementById("reserveForm");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stop page refresh

        var name = document.getElementById("name").value;
        var msg = document.getElementById("message");

        if (name === "") {
            msg.style.color = "red";
            msg.textContent = "Please enter your name.";
        } else {
            msg.style.color = "green";
            msg.textContent = "Thank you, " + name + ". Your seat is booked!";
            form.reset();
        }
    });
}
