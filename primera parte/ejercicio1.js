	/*Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos

PSEUDOCODIGO
INICIO
usuario 1
Escribe Piedra, papel o tijera
Leer  respuesta 
usuario 2
Escribe piedra, papel o tijera 
Leer respuesta

respuesta = piedra, papel,  tijera

	si  piedra o papel
	 escribe gana papel
    si  papel o tijera
 	 escriba gana tijera
 	si no tijera o piedra 
 	escriba gana piedra


FIN

*/

// alert("Juguemos Piedra, papel o tijeras\n");


// 	prompt("piedra papel o tijeras").value;
// 	prompt("piedra papel o tijeras").value;


// if (prompt.length == 0 || /^\s+$/.test(prompt));

// 	for(var i=1; i<=3; i++){
// 		if(var  piedra> var tijeras || var piedra> var papel ){
// 		 	alert("Gana piedra");
// 		 }
// 		 else if( var tijeras> var papel || var tijeras<var piedra){
// 		 	alert("Gana tijeras");
// 		 }
// 		 else if ( var papel> var piedra || var papel<var tijeras) {
// 		 	alert("Gana papel")	;
// 		 }
// 	}

	
// }
confirm("quieres jugar piedra papel o tijeras");
var usuario = prompt("Piedra papel o tijeras?");
var computadora=Math.random();

if (computadora < 0.34) {
	console.log(computadora="piedra");
}
else if (computadora<0.67) {
	console.log(computadora="papel");
}
else{
	console.log(computadora="tijeras");
}
var comparar=function(elecc1,elecc2){

	if(elecc1 === elecc2){
		alert("Esto es empate");
	}
	else if(elecc1==="piedra"){
		if(elecc2==="tijeras"){
			alert("Piedra gana");
		}else{
			alert("Papel gana");
		}
	}
	if(elecc1 === elecc2){
		alert ("Esto es empate");
	}
	else if(elecc1==="piedra"){
		if(elecc1==="papel"){
			alert("Papel gana");
		}else{
			alert("tijeras gana");
		}
	}
	
	if(elecc1 === elecc2){
		return "Esto es empate";
	}
	else if(elecc1==="tijeras"){
		if(elecc2==="piedra"){
			alert("Piedra gana");
		}else{
			alert("Tijeras gana");
		}
	}

}



	


		








 

