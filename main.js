/* nome e sobrenome */
$(document).ready(function () {
  $('.funcion_name').keyup({
    function() {
      $('.function_name').css('text-transform', 'uppercase')
    }
  })
})

$('#checkbox_fil').click(function () {
  $('#box_quant_fil :input').prop('disabled', false)
})

function maiuscula(texto) {
  texto.value = texto.value.toUpperCase()
}

/* habilitar campo quantidade de filhos */
function habilitarCampo() {
  if (document.formulario.filhos.checked) {
    document.formulario.qtdFilhos.disabled = false
  } else {
    document.formulario.qtdFilhos.value = ''
    document.formulario.qtdFilhos.disabled = true
  }
}
