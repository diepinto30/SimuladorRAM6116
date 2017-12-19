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
};


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
