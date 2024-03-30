const menu = document.querySelector(".menubar");

menu.addEventListener("click", () => {
    let items = document.querySelector(".navbar-items");
    items.classList.toggle("show");
})