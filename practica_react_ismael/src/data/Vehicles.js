class Vehiculo {
  constructor(marca, modelo, descripcion, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.descripcion = descripcion;
    this.color = color;
    this.precio = precio;
  }
}

export class Coche extends Vehiculo {
  constructor(marca, modelo, descripcion, color, precio, puertas) {
    super(marca, modelo, descripcion, color, precio);
    this.puertas = puertas;
  }
}

export class Moto extends Vehiculo {
  constructor(marca, modelo, descripcion, color, precio, potencia) {
    super(marca, modelo, descripcion, color, precio);
    this.potencia = potencia;
  }
}

  const vehiculos = [
    new Coche("Toyota", "Corolla", "Sedán compacto", "Blanco", 20000, 3),
    new Coche("Ford", "Focus", "Hatchback deportivo", "Rojo", 22000, 3),
    new Coche("Honda", "Civic", "Sedán mediano", "Negro", 24000, 3),
    new Coche("Chevrolet", "Malibu", "Sedán premium", "Blanco", 26000, 5),
    new Coche("Tesla", "Model 3", "Eléctrico avanzado", "Gris", 35000, 5),
    new Coche("BMW", "Serie 3", "Sedán de lujo", "Azul", 45000, 3),
    new Coche("Audi", "A4", "Sedán ejecutivo", "Plata", 48000, 5),
    new Coche("Mercedes", "Clase C", "Compacto de lujo", "Negro", 50000, 5),
    new Coche("Volkswagen", "Passat", "Sedán familiar", "Verde", 28000, 5),
    new Coche("Hyundai", "Elantra", "Sedán económico", "Amarillo", 21000, 5),
    new Moto("Yamaha", "R3", "Deportiva ligera", "Azul", 5500, 49),
    new Moto("Honda", "CBR500R", "Deportiva versátil", "Rojo", 7000, 49),
    new Moto("Suzuki", "GSX250R", "Deportiva compacta", "Negro", 5000, 150),
    new Moto("Ducati", "Panigale V4", "Superbike", "Rojo", 25000, 250),
    new Moto("BMW", "S1000RR", "Superbike avanzada", "Plata", 19000, 250),
    new Moto("KTM", "RC 390", "Deportiva ligera", "Naranja", 5800, 250),
    new Moto("Aprilia", "RS 660", "Deportiva premium", "Azul", 11500, 100),
  ];

  export default vehiculos