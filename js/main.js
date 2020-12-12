
// Navigation padding on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.fontSize = "15px";
    document.getElementById("navbar").style.padding = "0.6rem";

  } else {
    document.getElementById("navbar").style.fontSize = "20px";
    document.getElementById("navbar").style.padding = "0.9rem";
  }
}

// back to top

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});



// Portfolio filter
$(document).ready(function () {

  $(".portfolio-list").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000').addClass('item');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000')
    }
  });

  $(".portfolio-list").on('click', function () {
    $(".portfolio-list").removeClass('filter-active')
    $(this).addClass('filter-active')
  });
})









