
var arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var suma = 0;
var arreglo2 = [];
var mensaje = 0;
var choice = "";

/*
for (i = 0; i<20; i++){
    num = arreglo[i]
    //suma = suma + arreglo[i]
    console.log(num);
}

*/

for (i = 0; i<(arreglo.length);i++){
    num = arreglo[i]%2
    if (num != 0){
        suma = suma + arreglo[i]
    }
} 
console.log(suma);

/*
function busarNumer(){
    mensaje = prompt("Ingrese un numero");
    for (var i = 0; i < arreglo.length; i++){
        numero = arreglo [i];
        if (mensaje == numero){
            console.log("El numero ",mensaje," se encuentra en la posicion ",[i]);
            break;
        }   
    }
    if (mensaje != numero){
        console.log("El numero ",mensaje," no se encuentra");
    }
}

busarNumer();

while (true){
    choice = prompt ("Desea buscar otro numero S o  N?");
    if (choice == "S"){
        busarNumer();
    }else{
        console.log("Hasta luego :)");
        break;
    }
    
}
*/