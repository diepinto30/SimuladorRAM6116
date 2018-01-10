// BOTONES DE DESPLAZAMIENTO
function parar(){
 $("#esfera").css({"animation-play-state":"paused"});
 $("#direccion").css({"animation-play-state":"paused"});
 $("#escrituraA").css({"animation-play-state":"paused"});
 $('#parar').attr("disabled", "disabled");
 $('#play').removeAttr("disabled");
}

function play(){
 $("#esfera").css({"animation-play-state":"running"});
 $("#direccion").css({"animation-play-state":"running"});
 $("#escrituraA").css({"animation-play-state":"running"});
 $('#parar').removeAttr("disabled");
 $('#play').attr("disabled", "disabled");
}
