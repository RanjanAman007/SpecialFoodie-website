// Form submission handling
document.getElementById("orderForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent the default form submission

   // Get form inputs
   var fullName = document.getElementById("fullName").value;
   var foodName = document.getElementById("foodName").value;
   var orderDetails = document.getElementById("orderDetails").value;
   var address = document.getElementById("address").value;
   var phoneNumber = document.getElementById("phoneNumber").value;
   var quantity = document.getElementById("quantity").value;
   var deliveryTime = document.getElementById("deliveryTime").value;

   // Here you can perform form validation if needed

   // Simulate form submission success (replace this with your actual form submission logic)
   // For demonstration purposes, I'm just showing the confirmation message
   document.getElementById("confirmationMessage").style.display = "block";
});

// Your existing JavaScript code
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 2,
     },
     1000: {
       slidesPerView: 3,
     },
  },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () =>{
     previewContainer.style.display = 'flex';
     let name = food.getAttribute('data-name');
     previewBox.forEach(preveiw =>{
        let target = preveiw.getAttribute('data-target');
        if(name == target){
           preveiw.classList.add('active');
        }
     });
  };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active');
  });
};

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
});

var swiper = new Swiper(".blogs-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoHeight:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 2,
     },
     1000: {
       slidesPerView: 3,
     },
  },
});
