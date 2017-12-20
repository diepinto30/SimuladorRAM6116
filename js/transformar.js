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

var suma =0;
function converletra() {
  	var input = document.getElementById("letra").value;
  	//output.value = "";
	var txt;
    var div;
	suma = suma +1;
    var r = confirm('Su palabra a tranformar es "'+ input +'".');
    if (r == true && (input.length > 0)) {
        txt = "La letra ya esta guardada, OK!";
		for (var i = 0; i < input.length; i++) {
    		div += '<tr>';
			div +=		'<th id="n'+suma+'">'+suma+'</th>';
			div +=		'<th>'+"0"+input[i].charCodeAt(0).toString(2) +'</th>';
			div += '</tr>';
			$("#results").append(div);
  		}
    } else {
        txt = "No se a convertido nada!";
    }
    document.getElementById("demo2").innerHTML = txt;
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
    //alert("Index: " + y[x].index + " is " + y[x].text +' OE ES:'+ y2[x2].text+ ' WE ES:'+ y3[x3].text);
	
	
	// Escritura forma
	if((y[x].index == 2) && (y2[x2].index == 1) && (y3[x3].index == 2)){
		alert('La función de escritura se activará!');
		$('.escritura').fadeIn("slow");
		$('.escritura1').fadeIn("slow");
		$('.lectura').fadeOut("slow");
		document.getElementById('aside').style.marginTop = "-28.8%";
	}
	else
	{
		 alert('No es la función para activar Intente de nuevo...!!!');
	 }
	
	//Lectura forma
	 if((y[x].index == 2) && (y2[x2].index == 2) && (y3[x3].index == 1)){
		alert('La función de escritura se activará!');
		$('.lectura').fadeIn("slow");
		$('.escritura').fadeOut("slow");
		 $('.escritura1').fadeOut("slow");
		document.getElementById('aside').style.marginTop = "-14.5%";
		//document.getElementById('aside').style.marginTop = "-16%";
	}
	else
	{
		 alert('No es la función para activar Intente de nuevo...!!!');
	}
	
}




