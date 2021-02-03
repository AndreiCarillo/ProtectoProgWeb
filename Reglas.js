function cambiarFondo1(){
    if(document.getElementById('estilos').href.value="Reglas.css"){
        document.getElementById('estilos').href = "reglasVerde.css";
    }
}
function cambiarFondo2(){
    if(document.getElementById('estilos').href.value="Reglas.css"){
        document.getElementById('estilos').href = 'reglasRojo.css';
    }
}
function cambiarFondo3(){
    if(document.getElementById('estilos').href.value="Reglas.css"){
        document.getElementById('estilos').href = 'Reglas.css';
    }
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