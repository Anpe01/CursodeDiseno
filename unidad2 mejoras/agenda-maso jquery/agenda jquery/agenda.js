$(document).ready(function()
{
  $("#btnRegistrar").click(function (e)
  {
      e.preventDefault();
      registrar();
  })
})

function guardarLocalStorage (nombre, correo, fecnac, pais, sexo){
  //verificar si nuestra variable datos ya existe en LS
  if(localStorage.getItem("datos") == null){
    var arrayFila = [1,nombre,correo,fecnac,pais,sexo];
    var arrayTabla = [arrayFila];
    var arrayTablaJSON = JSON.stringify(arrayTabla);
    localStorage.setItem("datos",arrayTablaJSON);
    }
    else {
      var arrayTabla = JSON.parse(localStorage.getItem("datos"))
      var numerFila = 0;
      for (var i = 0; i < arrayTabla.length; i++) {
        numeroFila = i + 1;
        arrayTabla[i][0] =numero;
      }

      //Agregar Datos Nuevos
      var arrayFilaInsertar = [numeroFila+1, nombre,correo,fecnac,pais,sexo];
      arrayTabla.push(arrayFilaInsertar);

      //Guardar Datos
      var arrayTablaJSON = JSON.stringify(arrayTabla);
      localStorage.setItem("datos",arrayTablaJSON);
  }
}

function registrar(){
    //obtener datos
    var nombre = $("#txtNombre").val();
    var correo = $("#txtCorreo").val();
    var fecnac = $("#txtFechaNac").val();
    var pais = $("#cboPais").val();
    var sexo = $("input:radio[name=chkSexo]:checked").val();

    //mostrar en consola
    console.log("Nombre",nombre);
    console.log("Correo",correo);
    console.log("Fecha",fecnac);
    console.log("País",pais);
    console.log("Sexo",sexo);

    //Agregar fila
    var fila  = "";
    fila += "<tr>";

    fila += "<tr>" + nombre + "</tr>";
    fila += "<tr>" + correo + "</tr>";
    fila += "<tr>" + fecnac + "</tr>";
    fila += "<tr>" + pais + "</tr>";
    fila += "<tr>" + sexo + "</tr>";
    fila += "<tr>" + '<button class="btn btn-danger btn-sm">x</button>' + "</tr>";
    fila += "<tr>";

    //Agregar a la tabla
    $("#tblDatos").append(fila);

    //Guardar en el localStorage
    guardarLocalStorage(nombre,correo,fecnac,pais,sexo);

}
