$(document).ready(function(){
    $("a").click(function(evento){
        alert("has pulsado el enlace.Ahora seras enviado a la pagina usat");
    });
});

//ocular | mostrar

$("#c1b").click(function(){
    $("#cont1").toggle(1500);
},function(){
    $("#cont1").toggle(1500);
});
