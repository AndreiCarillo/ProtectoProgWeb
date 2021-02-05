function Dificultad(){
    window.location.href="dificultad.html";}

function Estadisticas(){
    window.location.href="estadisticas.html";
}
function Reglas(){
    window.location.href="Reglas.html";
}

function Ingreso(){
    window.location.href="Ingreso.html";
}

function CargarD(){
    var datos='{"nombre":"Juan","apellido":"Perez","correo":"juan@gmail.com","juegosj":"17","juegosg":"8","tiempo":"2:53"}';
    setTimeout(function(){
        var ToJson=JSON.parse(datos);
        document.getElementById('1').innerHTML=ToJson.nombre;
        document.getElementById('2').innerHTML=ToJson.apellido;
        document.getElementById('3').innerHTML=ToJson.nombre;
        document.getElementById('4').innerHTML=ToJson.correo;
        document.getElementById('5').innerHTML=ToJson.juegosj;
        document.getElementById('6').innerHTML=ToJson.juegosg;
        document.getElementById('7').innerHTML=ToJson.tiempo;
    },2000)
    
        
        
}

function CambioCSS(){
    var select = document.getElementById("S1").value;
    
    switch (select) {
        case "estilo":
            document.getElementById('estilos').href = "estadisticas.css";
          break;
        case "estilo1":
            document.getElementById('estilos').href = "estadisticasRojo.css";
          break;
        
        case 'estilo2':
            document.getElementById('estilos').href = "estadisticasVerde.css";
          break;
        
      }
}
