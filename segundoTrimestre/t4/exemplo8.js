// let bombilla = {
//     id: 1,
//     marca: "Phillips",
//     intensidade: 80,
//     encendida: false,
//     conmutar: function () {
//         this.encendida= !this.encendida
//         console.log("A bombilla ahora esta", this.encendida ? "encendida" : "apagada")
//     }
// }

// console.log(bombilla)
// bombilla.conmutar()
// bombilla.conmutar()

// function DispositivoVello(nome, consumo) {
//     this.nome=nome
//     this.consumo=consumo
//     this.mostrarInfo=function() {
//         console.log(`Dispositivo ${this.nome} consume: ${this.consumo}`)
//     }
// }

// let radio=new DispositivoVello("Radio", "20kWh")
// radio.mostrarInfo()

class DispositivoNovo {
  static contadorDispositivos = 0;
  constructor(nome, fabricante) {
    ((this.nome = nome),
      (this.fabricante = fabricante),
      (this.conectado = false));
    DispositivoNovo.contadorDispositivos++;
  }

  conectar() {
    this.conectado = true;
    console.log(`${this.nome} esta conectado`);
  }

  static mostrarTotal() {
    console.log(`${this.contadorDispositivos} dispositivos en total`);
  }
}

let television = new DispositivoNovo("TV", "TG");
let ordenador = new DispositivoNovo("Mac", "Apple");
let lavadora = new DispositivoNovo("Lavadora", "Samsung");

console.log(
  `Dispositivo 1: ${
    television.nome + television.fabricante + television.conectado
  }`,
);
console.log(
  `Dispositivo 2: ${
    ordenador.nome + ordenador.fabricante + ordenador.conectado
  }`,
);
console.log(
  `Dispositivo 3: ${lavadora.nome + lavadora.fabricante + lavadora.conectado}`,
);

DispositivoNovo.mostrarTotal();

class Termostato extends DispositivoNovo {
  constructor(nome, fabricante, temperatura) {
    super(nome, fabricante);
    this._temperatura = temperatura;
  }

  get temperatura() {
    return this._temperatura;
  }

  set temperatura(tempNueva) {
    if (tempNueva < 5 || tempNueva > 35) {
      console.error("Temperatura fora de rango de seguridade");
    } else {
      this._temperatura = tempNueva;
      console.log(`Axustando temperatura a ${tempNueva}`);
    }
  }

  establecerTemperatura(temperatura) {
    this.temperatura = temperatura;
  }
}

let termostato1 = new Termostato(
  "ExemploTermostato",
  "FabricanteTermostato",
  34,
);

termostato1.temperatura = 20;
console.log("A temperatura nova es: " + termostato1.temperatura);

// let temp = termostato1.obtenerTemperatura();
// console.log("Temperatura: " + temp);
// console.log("Nueva Temperatura: " + termostato1.establecerTemperatura(71));

// try {
//   television.mostrarTotal();
// } catch (error) {
//   console.log("Error: " + error);
// }

class Sensor extends DispositivoNovo {
  constructor(arg1, arg2) {
    super("Sensor genérico", "Fabricante estándar");
    if (arguments.length == 0) {
      this.tipo = "Temperatura";
      this.unidad = "º C";
    } else if (arguments.length == 1 && typeof arg1 == "string") {
      this.nome = arg1;
      this.tipo = arg1;
      this.unidad = "ºC";
    } else if (typeof arg1 == "object") {
      this.nome = arg1.nome;
      this.tipo = arg1.tipo;
      this.unidad = arg1.unidad || "ºC";
      this.fabricante = arg1.fabricante;
    }
  }
  leer() {
    console.log(
      `Nombre: ${this.nome}, Unidad: ${this.unidad}, Fabricante: ${this.fabricante}, Tipo: ${this.tipo}`,
    );
  }
}

let sensorBasico = new Sensor();
let sensorMovemento = new Sensor("Movimiento");
let sensorFume = new Sensor({
  nome: "Sensor Cociña",
  tipo: "Fume",
  unidade: "ºC",
  fabricante: "Samsung",
});

sensorBasico.leer();
sensorMovemento.leer();
sensorFume.leer();

class SensorPro {
  constructor(nome, tipo, unidad) {
    this.nome = nome;
    this.tipo = tipo;
    this.unidad = unidad;
  }

  static crearSensorAgua(nome) {
    return new SensorPro(nome, "Inundacion", "Binario");
  }

  static crearDesdeJSON(json) {
    let datos = JSON.parse(json);
    return new SensorPro(datos.nome, datos.tipo, datos.unidad);
  }
}

let sensorAgua = SensorPro.crearSensorAgua("Sensor1");
console.log(sensorAgua);
let sensorLume = SensorPro.crearDesdeJSON(`{
  "nome": "Hugo",
  "tipo": "Lume",
  "unidad": "ºC"
  }`);
console.log(sensorLume);
