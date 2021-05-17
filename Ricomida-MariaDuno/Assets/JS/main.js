
$(document).ready(function () {
    $("h2").dblclick(function () {
        $(this).css({
            color:'red',
        })
    })

    $("#enviarcorreo").click(function () {
        alert("El correo fue enviado correctamente")
        })
   
        $("#Card-title").toogle(function () {
         $(this)toogle()
            })

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('.carousel').carousel({
      interval: false
     })
})  