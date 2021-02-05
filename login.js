
function ingreso(){
    window.location.href="Ingreso.html";}

var persona = {
    "Usuarios": [
    {
        "Nombre": "Pedro",
        "usuario":"Pedro",
        "contra":"1234",
        "genero": "Hombre",
        "correo": "p@gmail",
        "telefono": 1234567890
    },
    {
        "usuario":"Joss",
        "contra": "5678"
    },
    {
        "usuario": "Alan",
        "contra": "abcd"
    }
]
}
var datos = localStorage.getItem("Usuario");
var dat = JSON.parse(datos);
console.log(datos.nombre)
console.log(dat.usuario)
function getInfo(){
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("Contraseña").value;
    for (var i=0;i<persona.Usuarios.length;i++){
        if(usuario === persona.Usuarios[i].usuario && contrasena === persona.Usuarios[i].contra || usuario === dat.usuario && contrasena === dat.contraseña){
            alert("Felicidades " + usuario + " puedes entrar al sudoku");
            window.location.href="dificultad.html";
            return
        }
    }
    alert("Usuario o Contraseña Incorrecto");
}

