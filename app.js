let navbar = document.querySelector('.navbar');
let navLink1 = document.querySelector('#nav-link1')
let navLink2 = document.querySelector('#nav-link2')
let navLink3 = document.querySelector('#nav-link3')
let navLink4 = document.querySelector('#nav-link4')
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#FDF4EB';
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        navLink1.style.color = 'black'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = 'black'
        navLink4.style.color = 'black'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = "none";
        navLink1.style.color = '#ECEDEE'
        navLink2.style.color = '#ECEDEE'
        navLink2.backgroundColor = '#6E9DF8'
        navLink3.style.color = '#ECEDEE'
        navLink4.style.color = '#ECEDEE'
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500); // Change image every 1 seconds
}