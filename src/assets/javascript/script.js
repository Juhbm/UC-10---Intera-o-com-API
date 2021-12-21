
/* --- JQUERY --- */ 

/*função buscar com jQuery -- puxa dentro do input os produtos que tem na seção destaque*/
    
    $(document).ready(function(){
    $("#myInput").on("keyup", function(){
    var value = $(this). val().toLowerCase();
    $("#destaques .card").filter(function(){
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); 

       });
    });
});