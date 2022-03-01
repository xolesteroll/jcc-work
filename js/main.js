$(document).ready(() => {
  $(function () {
    const includes = $('[data-include]')
    $.each(includes, function () {
      const file = $(this).data('include') + '.html'
      $(this).load(file)
    })
  })

  $("tr.view-row").on("click", function () {
    $(this).toggleClass("open").next(".fold-row").toggleClass("open");
  });

  $(".popup-trigger").mouseenter(function () {
    $(this).prev(".input-popup").removeClass('hidden')
  })

  $(".popup-trigger").mouseleave(function () {
    $(this).prev(".input-popup").addClass("hidden")
  })

  $(".faq-list__item").on('click', function () {
    $(this).toggleClass('opened')
  })

  const inputs = document.querySelectorAll('input')

  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('active')
    })
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('active')
    })
  })

});

