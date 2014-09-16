// Smooth scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 47
       }, 1000);
       return false;
     }
    }
  });
});

// Scroll transitions: add 'return to top' uparrow and reduce header logo height

$(window).scroll(function(){  
  if ($(this).scrollTop() > 200) {
    $('.uparrow').fadeIn();
  }
  else {
    $('.uparrow').fadeOut();
  } 
  if ($(this).scrollTop() > 40) {
    $('.main-logo').addClass('past-main');
    $('.bar').addClass('appear');
  }
  else {
    $('.main-logo').removeClass('past-main');
    $('.bar').removeClass('appear');
  } 
});

$('.uparrow').click(function(){
  $('html, body').animate({ scrollTop: 0}, 1000);
  return false;
});

// Mobile nav menu  

$(function() {
  $('.menu-btn').click(function(){
    $('.responsive-menu').slideToggle(500);
    if ($(window).scrollTop() < 40) {
     $('.main-logo').addClass('past-main');
     $('.mobile-nav').addClass('appear');
   }
  });
  
  $('a[href*=#]:not([href=#])').click(function() {
  $('.responsive-menu').slideUp(500);
 });
});

// Image carousel

$(document).ready(function(){
  $('.img-list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 315,
    moveSlides: 1,
    slideMargin: 5,
    pager: false,
    speed: 600,
    captions: true
  });
});