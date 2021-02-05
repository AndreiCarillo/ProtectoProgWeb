function CambioCSS(){
    var select = document.getElementById("S1").value;
    
    setTimeout(function(){
        switch (select) {
            case "estilo":
                document.getElementById('estilos').href = "Reglas.css";
              break;
            case "estilo1":
                document.getElementById('estilos').href = "reglasRojo.css";
              break;
            
            case 'estilo2':
                document.getElementById('estilos').href = "reglasVerde.css";
              break;
            
          }
    },2000)
    
}

function Dificultad(){
    window.location.href="dificultad.html";}

function Estadisticas(){
    window.location.href="estadisticas.html";
}
function Reglas(){
    window.location.href="Reglas.html";}

function Ingreso(){
    window.location.href="Ingreso.html";}
function Git(){
    window.location = "https://github.com/AndreiCarillo/ProtectoProgWeb";}
