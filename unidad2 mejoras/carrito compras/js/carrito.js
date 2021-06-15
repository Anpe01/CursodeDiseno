window.onload = function () {
    // variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Papa Lais',
            precio: 1.5,
            descripcion:"producto de papas",
            imagen: '../carrito compras/img/papasLais.jpg'
        },
        {
            id: 2,
            nombre: 'Naranja',
            precio: 1.2,
            imagen: '../carrito compras/img/maranja.jpg'
        },
        {
            id: 3,
            nombre: 'Mayonesa',
            precio: 5,
            imagen: '../carrito compras/img/mayonesa.jpg'
        },
        {
            id: 4,
            nombre: 'Cereal Angel',
            precio: 8,
            imagen: '../carrito compras/img/cerealAngel.jpg'
        }
    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    
    //Dibuja todos los productos a partir 
    
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {

            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
     
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
           
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
       
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
          
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent =  'S/'+ info.precio;
        
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

  
    function anyadirProductoAlCarrito(evento) {
    
        carrito.push(evento.target.getAttribute('marcador'))
       
        calcularTotal();
    
        renderizarCarrito();

    }


    function renderizarCarrito() {
   
        DOMcarrito.textContent = '';
  
        const carritoSinDuplicados = [...new Set(carrito)];
     
        carritoSinDuplicados.forEach((item) => {
        
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
              
                return itemBaseDatos.id === parseInt(item);
            });
        
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
             
                return itemId === item ? total += 1 : total;
            }, 0);
          
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} -S/${miItem[0].precio}`;
          
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
       
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

  
    function borrarItemCarrito(evento) {
      
        const id = evento.target.dataset.item;
    
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
    
        renderizarCarrito();
  
        calcularTotal();
    }

  
    function calcularTotal() {

        total = 0;

        carrito.forEach((item) => {
       
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
 
        DOMtotal.textContent = total.toFixed(2);
    }

  
    function vaciarCarrito() {
   
        carrito = [];
 
        renderizarCarrito();
        calcularTotal();
    }


    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    renderizarProductos();


  } 