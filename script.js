
// Función para solicitar el número y validar el rango
const solicitarNumero = () => {
    let numero;
    
    // Validar que el número esté en el rango 1-20
    do {
        numero = parseInt(prompt("Introduce un número entre 1 y 20:"));
        if (numero < 1 || numero > 20) {
            console.log("Número fuera del rango");
        }
    } while (numero < 1 || numero > 20);
    
    return numero;
};

// Función para mostrar la tabla de multiplicar y el factorial, un ciclo for anidado para obtener el factorial del número ingresado
const mostrarResultados = (numero) => {
    console.log(`Tabla de multiplicar del ${numero}:`);
    
    // Mostrar la tabla de multiplicar
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
    
    console.log(`\nFactoriales hasta ${numero}:`);
    

    // Calcular y mostrar factorial 
    for (let j = 1; j <= numero; j++) {
        let factorial = 1;
        for (let k = 1; k <= j; k++) {
            factorial *= k; // Calcular factorial
        }
        console.log(`Factorial de ${j} es: ${factorial}`);
    }
};

// Programa principal
const main = () => {
    const numeroIngresado = solicitarNumero();
    mostrarResultados(numeroIngresado);
};

main();