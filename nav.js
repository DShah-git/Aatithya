let nav = document.getElementById("nav-container")
let container = document.getElementById("container")


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>=container.clientHeight - 180 - (24*2)){
        nav.style.position = "fixed"
        nav.style.backgroundColor = "#F5F5DC"
        nav.style.border = "2px solid #A20606"
        nav.style.top = "1.5rem !important"
        nav.style.right = "1.5rem !important"

    }
    else{
        nav.style.position = "sticky"
        nav.style.backgroundColor = "transparent"
        nav.style.top = "1.5rem"
        nav.style.border = "0px"
        nav.style.transition = "0"
        nav.style.right = ""
        nav.style.animation = ""
    }

    

});

