const closeButtons = document.querySelectorAll(".button--close");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
       button.closest(".modal").style.display = "none";
    });
});