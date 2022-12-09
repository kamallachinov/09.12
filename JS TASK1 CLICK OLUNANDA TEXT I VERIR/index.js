let buttons = document.querySelectorAll("a")
let texts = document.querySelectorAll(".card-text")
buttons.forEach(element => {
    texts.forEach(elem => {
        element.addEventListener("click", function () {
            elem.classList.remove("current")
            if (element.getAttribute("myattr") == elem.getAttribute("myattr")) {
                buttons.forEach(elemen => {
                    elemen.classList.remove("active")
                })
                elem.classList.add("current")
                element.classList.add("active");
            }
        })
    })
});