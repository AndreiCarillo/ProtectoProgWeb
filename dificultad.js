function Dificultad(){
    window.location.href="dificultad.html";}

function Estadisticas(){
    window.location.href="estadisticas.html";
}
function Reglas(){
    window.location.href="Reglas.html";}

function Ingreso(){
    window.location.href="ingreso.html";}

function NivelFacil(){
    window.location.href="NivelFacil.html";}

function NivelMedio(){
    window.location.href="NivelMedio.html";}

function NivelDificil(){
    window.location.href="NivelDificil.html";}

function NivelExtremo(){
    window.location.href="NivelExtremo.html";}

function CambioCSS(){
    var select = document.getElementById("S1").value;
    
    setTimeout(function(){
        switch (select) {
            case "estilo":
                document.getElementById('estilos').href = "dificultad.css";
              break;
            case "estilo1":
                document.getElementById('estilos').href = "dificultadRojo.css";
              break;
            
            case 'estilo2':
                document.getElementById('estilos').href = "dificultadVerde.css";
              break;
            
          }
    },2000)
    
}
