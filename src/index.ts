import "./styles.css";

let started: number = 0;
let num: number = Number(prompt("Ingrese un número"));
let numMax: number = num;
while (num > 0) {
  started = 0;
  if (num > numMax) {
    numMax = num;
  }
  num = Number(prompt("Ingrese un número"));
}
if (started === 0) {
  console.log(`El número máximo de la secuencia es: ${numMax}`);
}
