let mainForm = document.getElementById("mainForm");
mainForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    alert("Procesando...");
    
    let input_nom = document.getElementById("nombre");

    if(input_nom.value.length == 0){
        console.log("Se requiere insertar un nombre.");
        return;
    }

    let input_edad = document.getElementById("edad");

    if(input_edad.value.length == 0){
        console.log("Se requiere insertar una edad.");
        return;
    }
    else{
        if(isNaN(input_edad.value)){
            console.log("Valor de edad no válido.");
            return;
        }
    }

    let input_cod = document.getElementById("codigoPostal");

    if(input_cod.value.toString().length != 5 || isNaN(input_cod.value)){
        console.log("Código postal no válido.");
        return;
    }

    let input_genero = document.querySelector("input[name = 'genero']:checked");
    if(input_genero == null){
        console.log("Se requiere insertar un género.");
        return;
    } else {
        let generos = ["Masculino", "Femenino", "Otro"];
        if (generos.indexOf(input_genero.value)==-1){
            console.log("Se requiere insertar un género válido.");
            return;
        }
    }

    let input_interes = document.querySelector("input[name = 'intereses']:checked");
    if (input_interes != null) {
        let intereses = ["Tecnología", "Deportes", "Música", "Arte"];
        if (intereses.indexOf(input_interes.value)==-1){
            console.log("Se debe ingresar una opción válida.");
            return;
        }
    }

    let paises = ["México", "Guatemala", "Belice", "Estados Unidos", "Canadá", "España", "Argentina"];
    let input_pais = document.getElementById("pais");
    if (paises.indexOf(input_pais.value)==-1){
        console.log("Se debe seleccionar un país válido.");
    }

});