// funcion donde se convierte toda la palabra que ingresa el usuario
function convert() {
  	var output = document.getElementById("ti2");
  	var input = document.getElementById("ti1").value;
  	output.value = "";
    var txt;
    var r = confirm('Su palabra a tranformar es "'+ input +'".');
    if (r == true && (input.length > 0)) {
        txt = "La palabra es la siguiente, OK!";
		for (var i = 0; i < input.length; i++) {
    		output.value += "0"+input[i].charCodeAt(0).toString(2) + " ";
  		}
    } else {
        txt = "No se a convertido nada!";
    }
    document.getElementById("demo").innerHTML = txt;
}

// funcion donde se activa al css para la funcion de animacion DE LA ESCRUTRA
function animacion(algo){
	var contenido = document.getElementById("esfera");
	$("#esfera").addClass('esfera');
	$("#direccion").addClass('direccion');
  $("#escrituraA").addClass('escrituraA');
  $("#direccion").fadeIn();

	contenido.addEventListener('animationend', function(){
    $("#direccion").fadeOut();
		$("#esfera").removeClass('esfera');
		$("#direccion").removeClass('direccion');
    $("#escrituraA").removeClass('escrituraA');
    $(".datoTranformar").empty(); // limpiar el contenido del "p"
    $(".direccionHe").empty(); // limpiar el contenido del "p"
    $("#demo2").empty();
    alert('SU LETRA FUE GUARDADA CORRECTAMENTE...');
	}, false);
}



var suma =439;
var hexadecimal;
function converletra() {
  	var input = document.getElementById("letra").value;
  	//output.value = "";
	var txt;
  var div;
	var algo; // Almacena el valor tranformado
  var dato;
    var r = confirm('Su palabra a tranformar es "'+ input +'".');
    if (r == true && (input.length > 0)) {
        txt = "La letra ya esta guardada, OK!";
		for (var i = 0; i < input.length; i++) {

      hexadecimal = suma.toString(16).toUpperCase(); // tranformar decimal a hexadecimal
    	div += '<tr>';
			div +=		'<th id="n'+hexadecimal+'">'+hexadecimal+'</th>';
			div +=		'<th>'+"0"+input[i].charCodeAt(0).toString(2) +'</th>';
			div += '</tr>';
      suma = suma+1;
			algo = ''+"0"+input[i].charCodeAt(0).toString(2)+'';
      animacion(algo);
			$("#results").append(div);
  		}
    } else {
        txt = "No se a convertido nada!";
    }
    document.getElementById("demo2").innerHTML = txt;
    $(".datoTranformar").append('<p style="background-color:#ccc!important;width:4em;padding-top:0.3em;padding-button:0.5em;padding-left:0.5em">'+algo+'</p>');
    $(".direccionHe").append('<p style="background-color:#ccc!important;width:2em;padding-top:0.3em;padding-button:0.5em;padding-left:0.5em">'+hexadecimal+'</p>');
    //alert('Su registro es: "'+algo+'", fue guardado correctamente');

}


function search() {
  	var output = document.getElementById("palabraBN");
  	var input = document.getElementById("decimal").value;
  	output.value = "";
    var txt;
    var r = confirm('Su su número ingresado es: "'+ input +'".');
    if (r == true && (input.length > 0)) {
        txt = "El registro ha sido encontrado exitosamente, OK!";
    } else {
        txt = "No se ha buscado ningun registro";
    }
    document.getElementById("demo1").innerHTML = txt;

}

function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
	var x2 = document.getElementById("mySelect2").selectedIndex;
  var y2 = document.getElementById("mySelect2").options;
	var x3 = document.getElementById("mySelect3").selectedIndex;
  var y3 = document.getElementById("mySelect3").options;

  // obtener el dato del combox de seleccion
	// Escritura forma
	if((y[x].index == 2) && (y2[x2].index == 1) && (y3[x3].index == 2)){
		alert('La función de ESCRITURA se activará!');
		$('.escritura').fadeIn("slow");
		$('.escritura1').fadeIn("slow");
		$('.lectura').fadeOut("slow");
		document.getElementById('aside').style.marginTop = "-28.8%";
	}
	else if((y[x].index == 2) && (y2[x2].index == 2) && (y3[x3].index == 1)){ //Lectura forma
		alert('La función de LECTURA se activará!');
		$('.lectura').fadeIn("slow");
		$('.escritura').fadeOut("slow");
		 $('.escritura1').fadeOut("slow");
		document.getElementById('aside').style.marginTop = "-14.5%";
		//document.getElementById('aside').style.marginTop = "-16%";
	}
	else
	{
		 alert('No se activo nada, INTENTE DE NUEVO...!!!');
	}

}
