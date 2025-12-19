// Sélection boutons
let boutonMode = document.getElementById("btn-lightmode");
let burgerMenu = document.getElementById("burger-menu");

// Clic menu
burgerMenu.addEventListener("click", function() {
    // Ouvre/ferme sidebar
    document.body.classList.toggle("sidebar-open");
});

// Clic 
boutonMode.addEventListener("click", function() {
    // Change couleurs
    document.body.classList.toggle("light-mode");

    // Change texte
    if (document.body.classList.contains("light-mode")){
        boutonMode.textContent = "Mode sombre";
    } else {
        boutonMode.textContent = "Mode clair";
    }
})