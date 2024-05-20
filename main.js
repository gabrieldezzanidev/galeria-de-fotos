$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoDaNovaImagem = $('endereço-imagem-nova').val();
        console.log(endereçoDaNovaImagem);
    })  
})
