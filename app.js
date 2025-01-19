let numeroSecreto = 6;
let numeroUsuario=0;
let contador= 0;

while(numeroUsuario != numeroSecreto ){
    let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es: ${numeroUsuario}`);
    }
    else{
        if(numeroUsuario>numeroSecreto){
            alert("El numero debe ser menor");
        }
        else{
            alert("El numero debe ser mayor");
        }
    }

    contador=contador+1
    alert(`Realizaste ${contador} intentos`);
}

