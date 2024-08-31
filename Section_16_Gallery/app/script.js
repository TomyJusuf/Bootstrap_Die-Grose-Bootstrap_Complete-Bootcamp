$(document).ready(function () {
  lightbox.option({
    wrapAround: true,
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });
  $(document).on('click', 'button[id^="button-"]', function (e) {
    let targetId = e.target.id;

    let idParts = targetId.split('-');

    if (idParts.length === 2) {
      let btnId = idParts[1];

      $('#book-1').attr('src', 'img/writers/' + btnId + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + btnId + '-book2.jpg');
    }
  });
});
