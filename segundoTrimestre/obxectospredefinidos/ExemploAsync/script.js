const btnCargar = document.getElementById("cargarUsuarios");
const listaUsuarios = document.getElementById("listaUsuarios");
const detallesUsuario = document.getElementById("detallesUsuario");
const mensaxe = document.getElementById("mensaxe");

const URL = "https://jsonplaceholder.typicode.com/users";

async function obterUsuarios() {
  mensaxe.textContent = "Cargando Usuarios...";

  // 1 Forma de Hacerlo
  // return fetch(URL)
  // .then(response => {
  //     if (!response.ok) throw new Error('Erro ao cargar usuarios')
  //     return response.json()
  // })

  // // 2 Forma de hacerlo
  // const tempoEspera = Math.floor(Math.random() * 7) + 1;
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (tempoEspera > 4) {
  //       reject(new Error("Erro: A carga tardou demasiado"));
  //     } else {
  //       fetch(URL)
  //         .then((response) => {
  //           if (!response.ok) throw new Error("Erro ao cargar usuarios");
  //           return response.json();
  //         })
  //         .then(resolve)
  //         .catch(reject);
  //     }
  //   }, tempoEspera * 1000);
  // });

  const tempoEspera = Math.floor(Math.random() * 7) + 1;

  try {
    await new Promise((resolve) => setTimeout(resolve, tempoEspera * 1000));

    if (tempoEspera > 4) {
      throw new Error("Erro: a carga tardou demasiado");
    }

    let datos = await fetch(URL);
    if (!datos.ok) throw new Error("Erro ao cargar os usuarios");
    let usuarios = await datos.json();
    console.log(usuarios);
    return usuarios;
  } catch (erro) {
    mensaxe.textContent = erro.message;
  }
}

function mostrarUsuarios(usuarios) {
  listaUsuarios.innerHTML = "";
  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    li.onclick = () => obterDetallesUsuario(usuario.id);
    listaUsuarios.appendChild(li);
  });
  mensaxe.textContent = "";
}

function mostrarDetalles(usuario) {
  detallesUsuario.innerHTML = `
        <h2>${usuario.name}</h2>
        <p><strong>Email: </strong> ${usuario.email}</p>
        <p><strong>Telefono: </strong> ${usuario.phone}</p>
        <p><strong>Cidade: </strong> ${usuario.address.city}</p>
        <p><strong>Empresa: </strong> ${usuario.company.name}</p>
    `;
}

async function obterDetallesUsuario(id) {
  mensaxe.textContent = "Cargando detalles...";
  detallesUsuario.textContent = "Cargando detalles do usuario " + id + "...";
  try {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) throw new Error("Erro ao cargar detalles");
    const usuario = await response.json();
    mostrarDetalles(usuario);
    mensaxe.textContent = "";
  } catch (erro) {
    mensaxe.textContent = erro.message;
    detallesUsuario.innerHTML = "";
  }
}

//Evento para cargar usuarios a funcion executora do correspondente Promise
btnCargar.onclick = async () => {
  listaUsuarios.innerHTML = "";
  detallesUsuario.innerHTML = "";
  btnCargar.disabled = true;
  try {
    const usuarios = await obterUsuarios();
    mostrarUsuarios(usuarios);
  } catch (erro) {
    mensaxe.textContent = erro.message;
  } finally {
    btnCargar.disabled = false;
  }
};

// btnCargar.addEventListener("click", async () => {
//   listaUsuarios.innerHTML=""
//   detallesUsuario.innerHTML=""
//   btnCargar.disabled=true
//   try {
//     usuarios=obterUsuarios()
//     mostrarUsuarios(usuarios)
//   } catch(erro) {
//     mensaxe.textContent=erro.message
//   }
// })
