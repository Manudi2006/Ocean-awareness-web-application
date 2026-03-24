document.getElementById("name").addEventListener("input", function () {
    let nameField = this;
    let errorMessage = document.getElementById("nameError");
    
    if (!nameField.value.match(/^[A-Za-z\s]*$/)) {
        nameField.setCustomValidity("Only letters are allowed.");
        errorMessage.style.display = "block"; 
    } else {
        nameField.setCustomValidity(""); 
        errorMessage.style.display = "none";
    }
});

document.getElementById("telno").addEventListener("input", function () {
    let telField = this;
    let errorMessage = document.getElementById("telError");

    // Remove any non-numeric characters
    telField.value = telField.value.replace(/\D/g, '');

    // Limit input to exactly 10 digits
    if (telField.value.length > 10) {
        telField.value = telField.value.slice(0, 10); // Trim excess digits
    }

    // Show error if less than 10 digits
    if (telField.value.length !== 10) {
        telField.setCustomValidity("Please enter exactly 10 digits.");
        errorMessage.style.display = "block";
    } else {
        telField.setCustomValidity("");
        errorMessage.style.display = "none";
    }
});

document.getElementById("comments").addEventListener("input", function () {
    let text = this.value.trim();
    let words = text.split(/\s+/).filter(word => word.length > 0);
    let wordCount = words.length;
    let remaining = 300 - wordCount;

    if (wordCount > 300) {
        this.value = words.slice(0, 300).join(" ");
        remaining = 0;
    }

    document.getElementById("wordCounter").textContent = remaining + " words remaining";
});

                        