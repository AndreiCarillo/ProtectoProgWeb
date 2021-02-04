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
