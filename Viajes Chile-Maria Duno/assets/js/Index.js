//smoll scroll
$document.ready (function () {

    $('a').clic(function(event) {
        event.preventDefault();

        var gato = this.hash;

        $('html').animate({
            scrollTop: $(gato).offset().top - 100 
        },
        1200
         );
    });
});

//Tolltip
$(function () {
     $('[data-toggle="tooltip"]').tooltip();
});