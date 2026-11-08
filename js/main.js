class ComponenteGTI {
    constructor(id, nombre, categoria, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`[Venta exitosa]: Se vendieron ${cantidad} unidad(es) de "${this.nombre}". Stock restante: ${this.stock}.`);
        } else {
            console.log(`[Stock insuficiente]: No hay suficiente stock de "${this.nombre}" para vender ${cantidad} unidades. Stock actual: ${this.stock}.`);
        }
    }

   
    aplicarDescuento(porcentaje) {
        const descuento = (this.precio * porcentaje) / 100;
        this.precio -= descuento;
        console.log(`[Descuento aplicado]: El nuevo precio de "${this.nombre}" con un ${porcentaje}% de descuento es $${this.precio.toFixed(2)}.`);
    }
}

const producto1 = new ComponenteGTI(1, "Kit de Frenos Brembo Ceramic", "Frenos", 650, 4);
const producto2 = new ComponenteGTI(2, "Downpipe de Acero Inoxidable 3\"", "Escape", 320, 7);
const producto3 = new ComponenteGTI(3, "Bobinas de Encendido R8", "Encendido", 240, 10);


console.log("--- ESTADO INICIAL DE LOS PRODUCTOS ---");
console.log(producto1);
console.log(producto2);
console.log(producto3);

console.log("\n--- PROBANDO MÉTODOS ---");

producto1.vender(2);


producto2.vender(10);


producto3.aplicarDescuento(15);

console.log("\n--- ESTADO FINAL DE LOS OBJETOS MODIFICADOS ---");
console.log(producto1);
console.log(producto2);
console.log(producto3);