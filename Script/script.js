let primerNumeroIngresado = parseFloat(prompt("Introduce el primer número:"));

if (!isNaN(primerNumeroIngresado)) {
  let segundoNumeroIngresado = parseFloat(
    prompt("Introduce el segundo número:")
  );
  if (!isNaN(segundoNumeroIngresado)) {
    let totalSuma = primerNumeroIngresado + segundoNumeroIngresado;
    let totalResta = primerNumeroIngresado - segundoNumeroIngresado;
    let totalMultiplicacion = primerNumeroIngresado * segundoNumeroIngresado;
    let totalDivision = primerNumeroIngresado / segundoNumeroIngresado;
    console.log("el resultado de la SUMA es: " + "[" + totalSuma + "]");
    console.log("el resultado de la RESTA es: " + "[" + totalResta + "]");
    console.log(
      "el resultado de la MULTIPLICACION es: " + "[" + totalMultiplicacion + "]"
    );
    console.log("el resultado de la DIVISION es: " + "[" + totalDivision + "]");
  }
  if (valorDado > totalSuma) {
    console.log("el resultado de la suma es menor que Valor Dado");
  } else {
    console.log("La suma es mayor que el Valor Dado");
  }
  if (valorDado > totalResta) {
    console.log("La RESTA es menor que el Valor Dado");
  } else {
    console.log("La RESTA es mayor que el Valor Dado");
  }
  if (valorDado > totalMultiplicacion) {
    console.log("La MULTIPLICACION es Menor que el Valor Dado");
  } else {
    console.log("La MULTIPLICACION es Mayor que El Valor Dado");
  }
  if (valorDado > totalDivision) {
    console.log("La DIVISION es Menor que el Valor Dado");
  } else {
    console.log("La DIVISION es Mayor que el Valor Dado");
  }
} else {
  console.log("El valor ingresado no es VALIDO");
}
let valorDado = 150;
console.log("Gracias Vuelva Pronto!!!");
