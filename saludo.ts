// Mini-LMS · Semana 6 - Sesión 11 (teoría)
// Primer contacto con Node.js y TypeScript
// Escenario académico simulado (no es un sistema real de UTP)
// 1) JavaScript en Node: se ejecuta desde la terminal

console.log("Hola desde Node.js");
// 2) TypeScript: variables con tipo (anotaciones).

let nombre: string = "María Torres";
let creditos: number = 18;
let activo: boolean = true;
console.log(nombre, creditos, activo);
// 3) Función tipada: recibe y devuelve tipos declarados.

function saludar(persona: string): string {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
// 4) Interfaz: describe la forma de un dato.

interface Curso {
    nombre: string;
    creditos: number;
}
const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 15 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`)

let pasaste:string=""

if (curso.creditos === 20) {
    pasaste="Bueno"
} else if (curso.creditos >= 12 && creditos <= 19) {
    pasaste="Tas bien"
} else {
    pasaste= "Ya jalaste manito para el siguiente siclo sera."
}

console.log(pasaste)

