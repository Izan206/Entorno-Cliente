let nomeInput = document.getElementById("nome");
let apelidosInput = document.getElementById("apelidos");
let dataInput = document.getElementById("data");
let telefonoInput = document.getElementById("telefono");
let emailInput = document.getElementById("email");
let enderezoInput = document.getElementById("enderezo");
let comentariosInput = document.getElementById("comentarios");
let listaContactosHTML = document.getElementById("listaxe-contactos");

let contactos = [];

function limparFormulario() {
  nomeInput.value = "";
  apelidosInput.value = "";
  dataInput.value = "";
  telefonoInput.value = "";
  emailInput.value = "";
  enderezoInput.value = "";
  comentariosInput.value = "";
}

function formatearFecha(dataObxecto) {
  let opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dataObxecto.toLocaleDateString("es-ES", opciones);
}

function engadirContacto() {
  let nome = nomeInput.value;
  let apelidos = apelidosInput.value;
  let dataStr = dataInput.value;
  let dataObxecto = new Date(dataStr);
  let dataFormateadaStr = formatearFecha(dataObxecto);
  let telefono = telefonoInput.value;
  let email = emailInput.value;
  let enderezo = enderezoInput.value;
  let comentarios = comentariosInput.value;

  let contacto = {
    nome: nome,
    apelidos: apelidos,
    data: dataFormateadaStr,
    dataObxecto: dataObxecto,
    telefono: telefono,
    email: email,
    enderezo: enderezo,
    comentarios: comentarios,
  };

  contactos.push(contacto);
  contactos.sort((a, b) =>
    a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
  );
  limparFormulario();

  renderizarContactos();
}

function renderizarContactos() {
  let contactoHTML = contactos.map((elemento) => {
    return `
      <p>${elemento.nome + " " + elemento.apelidos}
        - Data: ${elemento.data}
        - Tlf: ${elemento.telefono}
        - E-mail: ${elemento.email}
        - Enderezo: ${elemento.enderezo}
        - Comentarios: ${elemento.comentarios}
      </p>
    `;
  });

  listaContactosHTML.innerHTML = contactoHTML.join("");
}

function modificarContacto() {
  let nomeBuscado = nomeInput.value.toLowerCase();
  let contactoBuscado = contactos.find((contacto) => {
    return contacto.nome.toLowerCase() === nomeBuscado;
  });

  if (contactoBuscado) {
    contactoBuscado.apelidos = apelidosInput.value;
    contactoBuscado.data = dataInput.value;
    contactoBuscado.telefono = telefonoInput.value;
    contactoBuscado.email = emailInput.value;
    contactoBuscado.enderezo = enderezoInput.value;
    contactoBuscado.comentarios = comentariosInput.value;
  }

  renderizarContactos();
  limparFormulario();
}

function buscarContacto() {
  let nomeBuscado = nomeInput.value.toLowerCase();
  let contactoBuscado = contactos.find((c) => {
    return c.nome.toLowerCase() === nomeBuscado;
  });

  if (contactoBuscado) {
    apelidosInput.value = contactoBuscado.apelidos;
    dataInput.value = contactoBuscado.data;
    telefonoInput.value = contactoBuscado.telefono;
    emailInput.value = contactoBuscado.email;
    enderezoInput.value = contactoBuscado.enderezo;
    comentariosInput.value = contactoBuscado.comentarios;
  }
}

function eliminarContacto() {
  contactos = contactos.filter((contacto) => {
    return contacto.nome != nomeInput.value;
  });
  renderizarContactos();
  limparFormulario();
}
