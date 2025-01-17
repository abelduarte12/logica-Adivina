let numeroSecreto = 12;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}
else{
    alert('Numero equivocado, intentalo de nuevo');
}