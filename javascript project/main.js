const mainHome = document.querySelector("#main-home")
const portfolio = document.querySelector("#portfolio")
const contact = document.querySelector("#contact")
const blog = document.querySelector("#blog")

// slideshow der design bilder bei projects //

var slideContainer = function () {
    var i;
    var slides = document.querySelectorAll(".slides");
    for (i = 0; i <slides.length; i++) {
      slides[i].setAttribute("style","display:none");
    }
    count++;
    if (count > slides.length) { count = 1; }
    slides[count-1].setAttribute("style","display:block");
    setTimeout(slideContainer, 6000);
}

var count = 0;

if(portfolio){
    slideContainer();

    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

const slideLeft = document.querySelector(".slidearrow-left");
const slideRight = document.querySelector(".slidearrow-right");

slideLeft.addEventListener("click", (e) =>{
    showDivs(slideIndex -= -1);
})

slideRight.addEventListener("click", (e) =>{
    showDivs(slideIndex += 1);
})
}




const clientImage = document.querySelectorAll(".client-image");
const clientImageTextOne = document.querySelector(".client-image-text-one");
const clientImageTextTwo = document.querySelector(".client-image-text-two");
const clientImageTextThree = document.querySelector(".client-image-text-three");
const clientImageTextFour = document.querySelector(".client-image-text-four");


clientImage.forEach(img => {
    img.addEventListener("mouseover", (e) => {
        const targetElement = e.currentTarget
        const imageDiv = targetElement.querySelector(".image-container")
        const text = targetElement.querySelector("p")
        text.style.display = "block"
        imageDiv.style.filter = "grayscale(100%) blur(3px)"
    }) 
    
    img.addEventListener("mouseleave", (e) => {
        const targetElement = e.currentTarget
        const imageDiv = targetElement.querySelector(".image-container")
        const text = targetElement.querySelector("p")
        text.style.display = "none"
        imageDiv.style.filter = "grayscale(0)"
    })
});


// lightbox // 

if(blog){
const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const images = document.querySelectorAll(".grid img")
images.forEach(image => {
    console.log(image)
    image.addEventListener("click", e => {
        lightbox.classList.add("active")
        const img = document.createElement("img")
        img.src = image.src
        img.style.height = "700px"
        img.style.width = "auto"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener("click", e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
})

}

/* form validation */

if(contact){
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const alertField = document.querySelector(".alert-field");
const contactForm = document.querySelector("#contact-form");


contactForm.addEventListener("submit", (e) => {
    let messages = []
    if (firstName.value === "" || firstName.value.length < 3) {
        messages.push("First Name too Short ")
        e.preventDefault()
    }

    if(lastName.value === "" || lastName.value.length < 3) {
        messages.push("Last Name too Short ")
    }

    if (messages.length > 0){
        e.preventDefault()
        alertField.innerText = messages.join("")
        alertField.style.color = "white"
        alertField.style.fontSize = "2em"
    }

    const re = /\S+@\S+.\S+/;
    const emailValidation = re.test(String(email.value).toLowerCase())
    
    if(!emailValidation){
        messages.push("Enter valid email ")
    }
    

    /* 
    const regex = ^-?\d{1,3}(?:\.\d{3})*(?:,\d+)?$;

    

    if(phone.value ==""){
        messages.push("enter phone number")
    }else if(phone.value.match(regex)){
        messages.push("your phone number is valid")
    }

    */

})
}




/* navigation die beim handy angezeigt wird */

const aside = document.querySelector("aside");
const bars = document.querySelector(".burger-icon");
const backArrow = document.querySelector("#back-arrow");

bars.addEventListener("click", (e) => {
    aside.style.display = "block";
})

backArrow.addEventListener("click", (e) => {
    aside.style.display = "none";
})




