$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-menu').toggleClass('change');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 650) {
      $('.mission-text h1').addClass('fromLeft');
      $('.mission-text p').addClass('fromRight');
    } else {
      $('.mission-text h1').removeClass('fromLeft');
      $('.mission-text p').removeClass('fromRight');
    }
  });
  $('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filter').show('300');
    } else {
      $('.filter')
        .not('.' + value)
        .hide('300');
      $('.filter')
        .filter('.' + value)
        .show('300');
    }
  });
  $('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    let scrollTop = $(this).scrollTop();
    let windowWidth = $(this).width();
    if (
      (scrollTop >= 6157 && windowWidth >= 1200) ||
      (scrollTop >= 6450 && windowWidth >= 978) ||
      (scrollTop >= 5930 && windowWidth >= 770)
    ) {
      // Add animation classes
      $('.card-1').addClass('animationLeft');
      $('.card-2').addClass('animationTop');
      $('.card-3').addClass('animationRight');
    } else {
      // Remove animation classes
      $('.card-1').removeClass('animationLeft');
      $('.card-2').removeClass('animationTop');
      $('.card-3').removeClass('animationRight');
    }
  });
});
