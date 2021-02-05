function Login(){
    window.location.href="login.html";}
function validacion()
{
    var expresNombre = new RegExp(/^([A-Za-z]*)\D\s*$/);
    var expresUsuario = new RegExp(/^([1-9]*[A-Za-z]*[1-9]*)\S*$/);
    var expresemail = new RegExp(/^([A-Za-z1-9]*[@][A-Za-z1-9]*[.][A-Za-z1-9]*)\S*$/);

    let Nombre = document.getElementById("nombre").value;
    let Usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let contraseñacopia = document.getElementById("contraseñacopia").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    if (Nombre === '' || Usuario === '' || contraseña === ''|| contraseñacopia==='' || email === '' || telefono === ''){
        alert("Alguno de los campos esta vacio")
    }
    if (expresNombre.exec(Nombre)){
       if(expresUsuario.exec(Usuario)){
           if(contraseña === contraseñacopia){
               if(expresemail.exec(email)){

                       guardar_localstorage();
                                    }
               else{alert("El correo electronico no coincide esta mal");}
           }
           else{alert("La contraseña no coincide esta mal");}
       }
       else{alert("usuario esta mal");}
    }
    else{alert("nombre esta mal");}
}
    function guardar_localstorage() {
        var genero = document.getElementsByName("genero");
        for (i=0;i<genero.length;i++){
            if (genero[i].checked){
                var gen = genero[i].value;
            }
        }
        let persona = {
            usuario : document.getElementById("usuario").value,
            nombre : document.getElementById("nombre").value,
            contraseña : document.getElementById("contraseña").value,
            genero : gen,
            email : document.getElementById("email").value,
            telefono:document.getElementById("telefono").value,
        }
        console.log(gen)
        localStorage.setItem("Usuario",JSON.stringify(persona));

}