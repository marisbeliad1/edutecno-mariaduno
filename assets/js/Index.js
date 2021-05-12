$document.ready (function(){

    $('a').clic(function(event){
        event.preventDefauñt()

        var gato =this.hash;

        $('html').animate(´{
            scrollTop: $(gato).offset().top - 100 
        }, 
        800
         )

    });
});

$(function () {
 
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});