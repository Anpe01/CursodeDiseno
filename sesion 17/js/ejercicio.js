function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.numero = document.getElementById("numero").value;
}

function recuperarDatos(){
    if( (localStorage.nombre != undefined) &&  (localStorage.numero != undefined)){
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br> Numero de Celular" +localStorage.numero;
    }else{
        document.getElementById("datos").innerHTML = "No existen datos registrados"
    }
}
