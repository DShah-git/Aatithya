let nav = document.getElementById("nav-container")
let container = document.getElementById("container")
let links = document.getElementsByClassName("a")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>=container.clientHeight - 70 - (24*2)){
        nav.style.position = "fixed"
        nav.style.backgroundColor = "#F5F5DC"
        nav.style.border = "2px solid #A20606"
        nav.style.top = "1.5rem !important"
        nav.style.right = "2rem"
        nav.style.fontSize = "1.25rem"
        nav.style.boxShadow = "rgba(100, 100, 111, 1) 0px 7px 29px 0px;"
    }
    else{
        nav.style.position = "sticky"
        nav.style.backgroundColor = "transparent"
        nav.style.top = "1.5rem"
        nav.style.border = "0px"
        nav.style.fontSize = "1.5rem"
        nav.style.boxShadow = ""
    }

    

});

