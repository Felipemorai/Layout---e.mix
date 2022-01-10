$(document).ready(function() {
    var count = 0;
    $(".button").click(function() {
        var inputval = $(".input").val(); 
        let webtask = localStorage.getItem("localtask");
        if (inputval != '') {
            count ++;
            $(".afazer").append('<li class="bloco"><input id="checkbox-'+count+'" type="checkbox"><label for="checkbox-'+count+'">'+inputval+'</label><button id="delete"><i class="fa fa-trash"></i></button><button id="edit"><i class="fas fa-pen"></i></button></li> ')
        }else
         $(".input").val(''); 
        if(webtask == null) {
            taskObj = [];
        }else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':inputval, 'completeStatus':false});
        console.log(taskObj, 'tarefa');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        input.value = '';
    })
    const Feito = document.querySelector(".feito");
    const input = document.querySelector(".input");

    $(document).on('click', '.feito #delete, .afazer #delete' , function() {
        $(this).parent().remove();
    });

    $(document).on('change', 'input[type="checkbox"]' , function() {
        const parent = this.parentNode;
        parent.remove();
        Feito.appendChild(parent);
        
    });

    
})
