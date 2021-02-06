function validar(){
    var nick = document.getElementById("input1").value;
    var edad = document.getElementById("input2").value;

    console.log(nick);
    
    if(!(/[A-Za-z]+/.test(nick))||!(/[0-9]+/.test(edad))){
        alert("Datos incorrectos. Favor de introducuir unicamente letras en el campo NickName y exclusivamente numeros en el campo Age");
        return false;
    }else{
        return true;
    }
}

