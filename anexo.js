function Dificultad() {
    window.location.href = "dificultad.html";
}

function Estadisticas() {
    window.location.href = "estadisticas.html";
}
function Reglas() {
    window.location.href = "Reglas.html";
}

function Ingreso() {
    window.location.href = "ingreso.html";
}

function NivelFacil() {
    window.location.href = "NivelFacil.html";
}

function NivelMedio() {
    window.location.href = "NivelMedio.html";
}

function NivelDificil() {
    window.location.href = "NivelDificil.html";
}

function NivelExtremo() {
    window.location.href = "NivelExtremo.html";
}
function CambioCSS(){
    var select = document.getElementById("S1").value;
    
    setTimeout(function(){
        switch (select) {
            case "estilo":
                document.getElementById('estilos').href = "carrusel.css";
              break;
            case "estilo1":
                document.getElementById('estilos').href = "carruselrojo.css";
              break;
            
            case 'estilo2':
                document.getElementById('estilos').href = "carruselverde.css";
              break;
            
          }
    },2000)
    
}

class enlace {
    constructor(pre, e, post) {
        this.pre = pre;
        this.e = e;
        this.post = post;
    }
    build() {
        return this.pre + this.e + this.post;
    }
}

window.onload = function () {

    var pre = "<a href= '";
    var post = "'>JUGAR</p>";


    let enlaces = ["https://www.chess.com/es/play/computer", "https://papergames.io/es/tres-en-raya", "http://loteriamexicana.cholla.com.mx/", "https://www.pinturillo2.com/", "http://slither.io/"];

    let link1 = new enlace(pre, enlaces[0].toString(), post);
    let link2 = new enlace(pre, enlaces[1].toString(), post);
    let link3 = new enlace(pre, enlaces[2].toString(), post);
    let link4 = new enlace(pre, enlaces[3].toString(), post);
    let link5 = new enlace(pre, enlaces[4].toString(), post);

    var e1 = link1.build();
    var e2 = link2.build();
    var e3 = link3.build();
    var e4 = link4.build();
    var e5 = link5.build();

    document.getElementById("p1").innerHTML += e1.toString();
    document.getElementById("p2").innerHTML += e2.toString();
    document.getElementById("p3").innerHTML += e3.toString();
    document.getElementById("p4").innerHTML += e4.toString();
    document.getElementById("p5").innerHTML += e5.toString();
}



//LISTO PERRA ASI SE USA UNA CLASE