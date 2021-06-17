
var listaCursos = [
    [1, "Adhesivos", 199.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat20078?$Redesing223$"],
    [2, "Cemento y Complementos", 79.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat10172?$Redesing223$"],
    [3, "Escaleras", 200.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat20064?$Redesing223$"],
    [4, "Pintura de interior", 50.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat2949016?$Redesing223$"],
    [5, "Herramientas", 169.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat10148?$Redesing223$"],
    [6, "Pinturas para madera", 239.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat529025?$Redesing223$"],
    [7, "Chapas para puerta", 249.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat10188?$Redesing223$"],
    [8, "Accesorios para puertas", 189.00, "https://sodimac.scene7.com/is/image/SodimacPeru/cat20126?$Redesing223$"]
];

var carrito = [];

$(document).ready(function () {
    listarCursos();
    mostrarCarrito();
});

function listarCursos() {
    $(".lista-cursos").html("");
    listaCursos.forEach(c => {
        curso = '<div class="col-4">';
        curso +=    '<div class="card">';
        curso +=        '<img src="' + c[3] + '" alt="curso" class="card-img-top">';
        curso +=        '<div class="card-body">';
        curso +=            '<span>' + c[1] + '</span>';
        curso +=            '<h5>S/ ' + c[2] + '</h5>';
        curso +=            '<p class="card-text">Descripción</p>'
        curso +=            '<center><button class="btn btn-danger btnAgregar" onclick="agregar(' + c[0] + ')" id="' + c[0] + '">Agregar</button></center>';
        curso += '</div></div></div>';
        $(".lista-cursos").append(curso);
    });
}

function agregar(id) {
    carrito.push(listaCursos[id - 1]);
    document.getElementById(id.toString()).disabled = true;
    document.getElementById(id.toString()).innerHTML = "Agregado";
    mostrarCarrito();
}

function mostrarCarrito() {
    $("#tblDatos").html("");
    if (carrito.length != 0) {
        carrito.forEach(producto => {
            p = '<tr>';
            p +=    '<td class="text-center"><button class="btn btn-danger btn-sm" onclick="eliminarDeCarrito(' + producto[0] + ')">X</button></td>';
            p +=    '<td>' + producto[1] + '</td>';
            p +=    '<td> S/ ' + producto[2] + '</td>';
            p += '</tr>';
            $("#tblDatos").append(p);
        });
    }
    mostrarTotal();
}

function eliminarDeCarrito(id) {
    carrito.splice(carrito.indexOf(listaCursos[id - 1]), 1);
    document.getElementById(id.toString()).disabled = false;
    document.getElementById(id.toString()).innerHTML = "Agregar";
    mostrarCarrito();
    mostrarTotal();
}

var total;

function mostrarTotal() {
    $("#total").html("");
    total = 0;
    if (carrito.length != 0){
        carrito.forEach(p => total = total + p[2]);
        
        t = '<td colspan="2">Total a pagar:</td>';
        t += '<td>S/' + total + '</td>';
    
        $("#total").append(t);
    }
}

function limpiarCarrito() {
    carrito.forEach(p => {
        document.getElementById(p[0].toString()).disabled = false;
        document.getElementById(p[0].toString()).innerHTML = "Agregar ";
    });
    carrito = [];
    mostrarCarrito();
}

function comprar() {
    nombres = $("#txtNombres").val();
    email = $("#txtEmail").val();

    $("#contenido-modal").html("");
    c = "<h6>Confirme sus datos:</h6>";
    c += '<span class="ml-4">Nombres y Apellidos: </span>';
    c += '<span class="font-weight-bold">' + nombres + "</span><br>";
    c += '<span class="ml-4">Email: </span>';
    c += '<span class="font-weight-bold">' + email + "</span>";
    c += '<table class="table table-sm mt-4">';
    c +=    '<thead>';
    c +=        '<tr>';
    c +=            '<th>Producto</th>';
    c +=            '<th>Precio</th>';
    c +=        '</tr>';
    c +=    '</thead>';
    c +=    '<tbody>';
    carrito.forEach(p => {
        c +=    '<tr>';
        c +=        '<td>' + p[1] + '</td>';
        c +=        '<td>S/ ' + p[2] + '</td>';
        c +=    '</tr>';
    });
    c +=    '</tbody>';
    c +=    '<tfoot class="font-weight-bold">';
    c +=        '<tr>';
    c +=            '<td>Total:</td>';
    c +=            '<td>S/ ' + total + '</td>';
    c +=        '</tr>'
    c +=    '</tfoot>';
    c += '</table>'

    $("#contenido-modal").append(c);
}

function confirmarCompra() {
    limpiarCarrito();
    $("#txtNombres").val("");
    $("#txtEmail").val("");
}
