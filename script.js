// Dark mode toggle
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

// Search filter
function searchAnimals() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}
