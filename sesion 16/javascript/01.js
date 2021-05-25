function Suma(num1,num2){
    var suma;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    suma = num1+num2;

    document.write('La suma es:',suma);
    
}
function Resta(num1,num2){
    var resta;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    resta = num1-num2;
    document.write('La resta es:',resta);
}

function Comparacion(num1,num2){
      if(num1 == num2){
        document.write('El numero  :', num1 ,' y el numero :',num2,', son iguales');
      }else if (num1>= num2){
        document.write('El numero :',num1,' es mayor al numero :',num2);       
         }else{
            document.write('El numero:',num1,' es menor al numero : ',num2);
         }

}

function insertarSwitch() {
    var n, n1,n2;
    document.write(' Resultado: <br>');    
    n = prompt('Elige funcion:' ,'');
     n= parseInt(n);
     switch(n){
         case 1:
             n1 = prompt('Ingrese el primer numero:','');
             n2 = prompt('Ingrese el segundo numero:','');
             Suma(n1,n2);
             break;
         case 2:
             n1 = prompt('Ingrese el primer numero:','');
             n2 = prompt('Ingrese el segundo numero:','');
             Resta(n1,n2);
             break;        
         case 3:
             n1 = prompt('Ingrese el primer numero:','');
             n2 = prompt('Ingrese el segundo numero:','');
             Comparacion(n1,n2);
             break;  
         case 4:
            var f = new Date();
            document.write('La fecha actual es: ',f.getDate()+"/"+(f.getMonth() +1) +"/" +f.getFullYear());
            break;  
                 
     }
 
   }
 