
var $txtitem = document.getElementById("agregar_listas")
var $btnitem = document.getElementById("enviar")
var $tbtitem = document.getElementById("guardar_listas")


var xhr = new XMLHttpRequest();
xhr.open("GET", "./items.json", "true");

xhr.addEventListener("readystatechange", function(){
    if(xhr.readyState === 4) {
        
        var parsear = JSON.parse(xhr.responseText);
        

        for(let a in parsear.items){
            
            console.log(parsear.items[a]);
            var check = "";
            if(parsear.items[a].state == true){check = "checked";}
            $tbtitem.innerHTML += `<tr>
                <td>${parsear.items[a].name}</td>
                <td><input type="checkbox" ${check}></td>
                <td><a class="boton_eliminar">eliminar</a></td>
                </tr>`;
        }
    
    }
});

xhr.send();



$btnitem.onclick = function(e){
    e.preventDefault();
    $tbtitem.innerHTML += `<tr>
    <td>${$txtitem.value}</td>
    <td><input type="checkbox"></td>
    <td><a class="boton_eliminar">eliminar</a></td>
    </tr>`;
}




$tbtitem.onclick = function(e){
        if(e.target.classList[0] == "boton_eliminar"){
            console.log(e.target);
            e.target.parentElement.parentElement.style.display = "none";
        }
    
    
    }

