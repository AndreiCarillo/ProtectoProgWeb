// function Dificultad() {
//     window.location.href = "dificultad.html";
// }

// function Estadisticas() {
//     window.location.href = "estadisticas.html";
// }
// function Reglas() {
//     window.location.href = "Reglas.html";
// }

function Ingreso() {
    window.location.href = "Ingreso.html";
    //console.log("a");
}

// function NivelFacil() {
//     window.location.href = "NivelFacil.html";
// }

// function NivelMedio() {
//     window.location.href = "NivelMedio.html";
// }

// function NivelDificil() {
//     window.location.href = "NivelDificil.html";
// }

// function NivelExtremo() {
//     window.location.href = "NivelExtremo.html";
// }
function CambioCSS() {
    var select = document.getElementById("S1").value;

    setTimeout(function () {
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
    }, 2000);

}

//Creacion de la clase para generar los enlaces


class enlace {
    constructor(pre, e, post) {
        this.pre = pre;
        this.e = e;
        this.post = post;
    }
    //Concatenando la etiqueta con el enlace
    construir() {
        return this.pre + this.e + this.post;
    }
}

window.onload = function () {    

    var pre = "<a href= '";
    var post = "'>JUGAR</p>";
    var enlaces = ["https://www.chess.com/es/play/computer", "https://papergames.io/es/tres-en-raya", "http://loteriamexicana.cholla.com.mx/", "https://www.pinturillo2.com/", "http://slither.io/"];

    //Creqacion de objetos de la clase enclace
    var link1 = new enlace(pre, enlaces[0].toString(), post);
    var link2 = new enlace(pre, enlaces[1].toString(), post);
    var link3 = new enlace(pre, enlaces[2].toString(), post);
    var link4 = new enlace(pre, enlaces[3].toString(), post);
    var link5 = new enlace(pre, enlaces[4].toString(), post);

    var e1 = link1.construir();
    var e2 = link2.construir();
    var e3 = link3.construir();
    var e4 = link4.construir();
    var e5 = link5.construir();

    document.getElementById("p1").innerHTML += e1.toString();
    document.getElementById("p2").innerHTML += e2.toString();
    document.getElementById("p3").innerHTML += e3.toString();
    document.getElementById("p4").innerHTML += e4.toString();
    document.getElementById("p5").innerHTML += e5.toString();
    

    iniciarReloj();
}

function iniciarReloj() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = ceros(m);
    s = ceros(s);
    document.getElementById('reloj').innerHTML = h + ":" + m + ":" + s;
    //Timeout cada 1 segundo se ejecuta
    var t = setTimeout(iniciarReloj, 1000);
}
// Añade un cero a números menores a 10
function ceros(i) {
    if (i < 10) { i = "0" + i };
    return i;
}



