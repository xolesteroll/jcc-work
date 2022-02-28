$(document).ready(() => {
    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
          var file = $(this).data('include') + '.html'
          $(this).load(file)
        })
      })

    const inputs = document.querySelectorAll('input') 

    inputs.forEach(input => {
      input.addEventListener('focus', (e) => {
          input.parentElement.classList.add('active')
      })
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('active')
      })
    })
      
});

