let dimensionDeseada: number = Number(
  prompt("Ingrese la dimensión deseada para el arreglo")
);
let valoresNumericos: number[] = new Array(dimensionDeseada);

for (let indice = 0; indice < valoresNumericos.length; indice++) {
  valoresNumericos[indice] = Math.floor(Math.random() * 100);
  console.log(valoresNumericos[indice]);
}

let min = Math.min(...valoresNumericos);
console.log(`el menor es ${min}`);
