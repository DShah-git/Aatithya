let nav = document.getElementById("nav-container")
let container = document.getElementById("container")

let images = document.getElementById("images")
let imageLayout2 = document.getElementById("imageLayout2")
let infoContainer = document.getElementById("infoContainer")
let infoContainer2 = document.getElementById("infoContainer2")
let headingContainer = document.getElementById("headingContainer")

let about = document.getElementById("about")


let toggleClose = document.getElementById("toggleClose")

let toggleOpen = document.getElementById("toggleOpen")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

   
    if(window.outerWidth>=550){
        if(scroll>=container.clientHeight - 70 - (24*2)){
            nav.style.position = "fixed"
            nav.style.backgroundColor = "#e8e8cf"
            nav.style.border = "2px solid #A20606"
            nav.style.top = "1.5rem !important"
            nav.style.right = "2rem"
            nav.style.fontSize = "1.25rem"
            nav.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        }
        else{
            nav.style.position = "sticky"
            nav.style.backgroundColor = "transparent"
            nav.style.top = "1.5rem"
            nav.style.border = "0px"
            nav.style.fontSize = "1.5rem"
            nav.style.boxShadow = ""
        } 
    }
 

    if(scroll>=400 && !images.classList.value.split(' ').includes('animate-down')){
        images.classList.add('animate-down')
    }

    if(scroll>=400 && !infoContainer.classList.value.split(' ').includes('animate-up')){
        infoContainer.classList.add('animate-up')
    }

    if(scroll>=1350 && !headingContainer.classList.value.split(' ').includes('animate-down')){
        headingContainer.classList.add('animate-down')
    }

    if(scroll>=1400 && !imageLayout2.classList.value.split(' ').includes('animate-down')){
        imageLayout2.classList.add('animate-down')
    }

    if(scroll>=1400 && !infoContainer2.classList.value.split(' ').includes('animate-up')){
        infoContainer2.classList.add('animate-up')
    }
});

toggleOpen.addEventListener("click",()=>{
    toggleOpen.style.display = "none"
    nav.style.display = "block"
})

toggleClose.addEventListener("click",()=>{
    toggleOpen.style.display = "flex"
    toggleOpen.style.position = "fixed"
    nav.style.display = "none"
})


