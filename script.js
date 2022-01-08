$(document).ready(function() {
    var count = 0;
    $(".button").click(function() {
        var inputval = $(".input").val();
        if (inputval != '') {
            count ++;
            $(".afazer").append('<li class="bloco"><input id="checkbox-'+count+'" type="checkbox"><label for="checkbox-'+count+'">'+inputval+'</label><button id="delete"><i class="fa fa-trash"></i></button><button id="edit"><i class="fas fa-pen"></i></button></li> ')
        }
         $(".input").val(''); 
    })
    const Feito = document.querySelector(".feito");

    $(document).on('change', 'input[type="checkbox"]' , function() {
        const parent = this.parentNode;
        parent.remove();
        Feito.appendChild(parent);
        
    });
})
