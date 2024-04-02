const menu = document.querySelector(".menubar");

menu.addEventListener("click", () => {
    let items = document.querySelector(".navbar-items");
    items.classList.toggle("show");
    let body = document.querySelector("body");
    if (items.classList.contains("show")) {
        body.style.position = "fixed";
        body.style.top = "0";
        body.style.left = "0";
        body.style.width = "100%";
    }
    else {
        body.style.position = "relative"
    }
})

let accord_item = document.querySelectorAll(".accordian-box");

accord_item.forEach(element => {
    let click = element.querySelector(".accordian-txt-svg");
    let paragraph = element.querySelector(".accordian-p");
    let svg = element.querySelector(".accordian-svg");

    click.addEventListener("click", () => {
        accord_item.forEach(other => {
            if (other !== element) {
                let para = other.querySelector(".accordian-p");
                let svg = other.querySelector(".accordian-svg");
                para.classList.add("d-none");
                svg.style.transform = "rotate(0deg)"
            }
        });

        if (paragraph.classList.contains("d-none")) {
            paragraph.classList.remove("d-none");
            paragraph.classList.add("d-inline-block");
            svg.style.transform = "rotate(180deg)"
        }
        else {
            paragraph.classList.add("d-none");
            paragraph.classList.remove("d-inline");
            svg.style.transform = "rotate(0deg)"

        }
    })
});