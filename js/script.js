var $boton = document.getElementById("boton_modal");
var $ventana = document.getElementById("ventana_modal");

$boton.onclick = function(){
                     
                    $ventana.style.display = "block";
                     
                    };
 
$ventana.onclick = function(e){
     // $ventana.style.display = "none";
        var clic = e.target.id; 
      if(clic == "ventana_modal"){
         $ventana.style.display = "none";
     }
     
    
}
