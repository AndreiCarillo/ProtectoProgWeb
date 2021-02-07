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

/*
function CargarD(){
    var datos='{"nombre":"Pedro","apellido":"Cobos","correo":"p@gmail.com","juegosj":"17","juegosg":"8","tiempo":"2:53"}';
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
    
        
        
}*/

var localStorageKeyName = 'data2';

function loadFromLocalStorage() {
    
    var users2 = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName)

    if (dataInLocalStorage !== null) {
        users2 = JSON.parse(dataInLocalStorage);
    }
    users2.forEach(function (x) {
        document.getElementById('1').innerHTML=x.name;
        document.getElementById('2').innerHTML=x.ape;
        document.getElementById('3').innerHTML=x.usua;
        document.getElementById('4').innerHTML=x.email;
        document.getElementById('5').innerHTML=x.jugj;
        document.getElementById('6').innerHTML=x.jugg;
        document.getElementById('7').innerHTML=x.time;
    });
    
}


function CambioCSS(){
    var select = document.getElementById("S1").value;
    
    setTimeout(function(){
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
    },2000)
    
}

function Obtain(){
    var user2 = {
        name: document.getElementById("name").textContent,
        ape: document.getElementById("ape").textContent,
        usua: document.getElementById("usua").textContent,
        email: document.getElementById("email").textContent,
        jugj: document.getElementById("jugj").textContent,
        jugg: document.getElementById("jugg").textContent,
        time: document.getElementById("time").textContent
    };

               


    Create(user2); 
    
}

function Create(obj){
    var users2 = [],
    dataInLocalStorage = localStorage.getItem(localStorageKeyName);
    
    if (dataInLocalStorage !== null) {
        users2 = JSON.parse(dataInLocalStorage);
    }

    users2.push(obj);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users2));
    loadFromLocalStorage();
}
