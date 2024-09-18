let nav = document.getElementById("nav-container")
let container = document.getElementById("container")

let images = document.getElementById("images")
let imageLayout2 = document.getElementById("imageLayout2")
let infoContainer = document.getElementById("infoContainer")
let infoContainer2 = document.getElementById("infoContainer2")
let headingContainer = document.getElementById("headingContainer")

let about = document.getElementById("about")


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>=container.clientHeight - 70 - (24*2)){
        nav.style.position = "fixed"
        nav.style.backgroundColor = "#e8e8cf"
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


    

    if(scroll>=600 && !images.classList.value.split(' ').includes('animate-down')){
        images.classList.add('animate-down')
    }

    if(scroll>=600 && !infoContainer.classList.value.split(' ').includes('animate-up')){
        infoContainer.classList.add('animate-up')
    }

    if(scroll>=1400 && !headingContainer.classList.value.split(' ').includes('animate-down')){
        headingContainer.classList.add('animate-down')
    }

    if(scroll>=1450 && !imageLayout2.classList.value.split(' ').includes('animate-down')){
        imageLayout2.classList.add('animate-down')
    }

    if(scroll>=1500 && !infoContainer2.classList.value.split(' ').includes('animate-up')){
        infoContainer2.classList.add('animate-up')
    }
});



