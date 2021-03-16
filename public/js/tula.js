const botones = document.querySelectorAll(".bEliminar");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        const matricula = this.dataset.matricula;
        const costo = this.dataset.costo;
        alert("Agregado al carrito")

        //Solicitud AJAX
        httpRequest("http://app-937771dc-c3a5-4ddc-bf91-557125dae206.cleverapps.io/lista/addart/" + matricula, function () {
            //console.log(this.responseText);
           

        });

    });
});
function httpRequest(url, callback) {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback.apply(http);
        }
    }


}
