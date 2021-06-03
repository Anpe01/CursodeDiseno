function guardarDato(){
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    var correo = document.getElementById("correo").value;

    const datos = {
        'numero':numero,
        'correo':correo,
    };
    localStorage.setItem(nombre,JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("correo").value = "";
    actualizarDatos();
}

function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("numero").value = localStorage.getItem(numero);
}

function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro ="";

    if(localStorage.length === 0){
        registro+= '<li>Vacio</li>';
    }else{
        for(var i=0; i<= localStorage.length - 1;i++ ){
            var key =  localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>' + '<span class="nom">' +localStorage.getItem(key)+
             '</span>' + '</li><br>';
        }   
    }
    document.getElementById('contactos').innerHTML =registro;
}