let nav = document.getElementById("nav-container")
let container = document.getElementById("container")

let images = document.getElementById("images")
let infoContainer = document.getElementById("infoContainer")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>=container.clientHeight - 70 - (24*2)){
        nav.style.position = "fixed"
        nav.style.backgroundColor = "#F5F5DC"
        nav.style.border = "2px solid #A20606"
        nav.style.top = "1.5rem !important"
        nav.style.right = "2rem"
        nav.style.fontSize = "1.25rem"
        nav.style.boxShadow = " box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    }
    else{
        nav.style.position = "sticky"
        nav.style.backgroundColor = "transparent"
        nav.style.top = "1.5rem"
        nav.style.border = "0px"
        nav.style.fontSize = "1.5rem"
        nav.style.boxShadow = ""
    } 

    console.log(scroll)

    if(scroll>=600 && !images.classList.value.split(' ').includes('animate-down')){
        images.classList.add('animate-down')
    }

    if(scroll>=600 && !infoContainer.classList.value.split(' ').includes('animate-up')){
        infoContainer.classList.add('animate-up')
    }

});



