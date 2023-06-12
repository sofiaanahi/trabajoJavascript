// 1 EJERCICIO.
function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(esMayorEdad(20));
console.log(esMayorEdad(16));

// 2 EJERCICIO.
function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
console.log(calcularAreaRectangulo(5, 10));
console.log(calcularAreaRectangulo(3, 7));

// 3 EJERCICIO.
function esPalindromo(cadena) {
  let cadenaInvertida = cadena.split("").reverse().join("");
  return cadena === cadenaInvertida;
}
console.log(esPalindromo("radar"));
console.log(esPalindromo("hola"));

// 4 EJERCICIO.
function generaNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio;
}
console.log(generaNumeroAleatorio());
console.log(generaNumeroAleatorio());

// EJERCICIOS DE ARREGLOS.

// 1 EJERCICIO.
function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
console.log(obtenerSuma([1, 2, 3, 4, 5]));
console.log(obtenerSuma([10, -5, 8, 3]));

// 2 EJERCICIO.
function obtenerPares(arreglo) {
  var pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}
console.log(obtenerPares([1, 2, 3, 4, 5, 6]));
console.log(obtenerPares([10, 15, 20, 25]));

// 3 EJERCICIO.
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos deben tener la misma longitud.");
  }
  let totalNotas = 0;
  let totalPesos = 0;
  for (let i = 0; i < notas.length; i++) {
    totalNotas += notas[i] * pesos[i];
    totalPesos += pesos[i];
  }
  const promedioPonderado = totalNotas / totalPesos;
  return promedioPonderado;
}
// 4 EJERCICIO.
function obtenerMaximo(arreglo) {
  if (arreglo.length === 0) {
    throw new Error("El arreglo está vacío.");
  }

  let maximo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}
const numeros = [5, 9, 2, 14, 8, 1];
const maximo = obtenerMaximo(numeros);
console.log("El número máximo es:", maximo);

// EJERCICIOS DE OBJETOS.

// 1 EJERCICIO.

let producto = {
  nombre: "Nombre del producto",
  precio: 0,
  cantidad: 0,
};
function calculaTotal(producto) {
  return producto.precio * producto.cantidad;
}
let miProducto = {
  nombre: "Camiseta",
  precio: 15,
  cantidad: 2,
};

let totalPagar = calculaTotal(miProducto);
console.log("Total a pagar: $" + totalPagar);

// 2 EJERCICIO.

let miPersona;
let persona = {
  nombre: "",
  edad: 0,
  profesion: "",
};
function presentarPersona(persona) {
  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}
presentarPersona(miPersona);

// 4 EJERCICIO.

function esMayorEdad(persona) {
  return persona.edad >= 18;
}
let resultado = esMayorEdad(miPersona);
console.log(resultado);

// EJERCICIOS FINALES.

let numero = prompt("Ingrese un número:");
numero = Number(numero);

if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es igual a cero.");
}

let numero2 = prompt("Ingrese un número:");
numero = parseInt(numero2);
function esPrimo(numero2) {
  if (numero2 <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero2); i++) {
    if (numero2 % i === 0) {
      return false;
    }
  }
  return true;
}

if (esPrimo(numero)) {
  console.log("El número ingresado es primo.");
} else {
  console.log("El número ingresado no es primo.");
}

let temperatura = prompt("Ingrese la temperatura:");
temperatura = parseFloat(temperatura);
let unidad = prompt(
  "Ingrese la unidad de temperatura ('C' para Celsius o 'F' para Fahrenheit):"
);
function celsiusAFahrenheit(temperatura) {
  return (temperatura * 9) / 5 + 32;
}
function fahrenheitACelsius(temperatura) {
  return ((temperatura - 32) * 5) / 9;
}
if (unidad.toUpperCase() === "C") {
  let temperaturaFahrenheit = celsiusAFahrenheit(temperatura);
  console.log(
    temperatura +
      " grados Celsius equivalen a " +
      temperaturaFahrenheit +
      " grados Fahrenheit."
  );
} else if (unidad.toUpperCase() === "F") {
  let temperaturaCelsius = fahrenheitACelsius(temperatura);
  console.log(
    temperatura +
      " grados Fahrenheit equivalen a " +
      temperaturaCelsius +
      " grados Celsius."
  );
} else {
  console.log(
    "Unidad de temperatura no válida. Por favor, ingrese 'C' para Celsius o 'F' para Fahrenheit."
  );
}

let totalCompra = 0;

function calcularTotalCompra() {
  console.log("Total de la compra: $" + totalCompra);
}

while (true) {
  let precioProducto = prompt(
    "Ingrese el precio del producto (o ingrese 'total' para obtener el total de la compra):"
  );

  if (precioProducto.toLowerCase() === "total") {
    calcularTotalCompra();
    break;
  }
  let precio = parseFloat(precioProducto);
  if (!isNaN(precio)) {
    totalCompra += precio;
  } else {
    console.log(
      "Precio no válido. Por favor, ingrese un número válido o 'total' para obtener el total de la compra."
    );
  }
}
