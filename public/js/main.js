const botones=document.querySelectorAll(".bEliminar2");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        const matricula=this.dataset.id;
        const confirm=window.confirm("¿Deseas eliminar el articulo "+matricula+"?");
         if(confirm){
             //Solicitud AJAX
             httpRequest("http://app-937771dc-c3a5-4ddc-bf91-557125dae206.cleverapps.io/lista/eliminarDeseo/"+matricula, function(){
                //console.log(this.responseText);
                document.querySelector("#respuesta").innerHTML=this.responseText;
                const tbody= document.querySelector("#tbody-usuarios");
                const fila = document.querySelector("#fila-"+matricula);

                tbody.removeChild(fila);
             });
         }
    }); 
});
function httpRequest(url, callback){
    const http=new XMLHttpRequest();
    http.open("GET", url);
    http.send();

    http.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            callback.apply(http);
        }
    }

    
}
