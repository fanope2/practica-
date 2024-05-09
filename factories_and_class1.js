function crearEmpleado(nombre, cargo, salario) {
    return {
        nombre: nombre,
        cargo: cargo,
        salario: salario,
        obtenerDetalles: function() {
            return `${this.nombre} - ${this.cargo}, Salario: ${this.salario}`;
        }
    };
}


let empleado1 = crearEmpleado('Juan', 'Desarrollador', 50000);
let empleado2 = crearEmpleado('María', 'Diseñadora', 45000);

console.log(empleado1.obtenerDetalles()); 
console.log(empleado2.obtenerDetalles());  
