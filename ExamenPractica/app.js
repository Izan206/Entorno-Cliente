let textoInput = document.getElementById("nuevaTareaInput");
let dataInput = document.getElementById("nuevaTareaFecha");
let listaTareas = document.getElementById("listaTareas");

let tareas = [];

//Hacer tres funciones: Agregar, Renderizar y Eliminar

function agregarTarea() {
  let textoTarea = textoInput.value.trim();
  let dataTareaStr = dataInput.value.trim();

  if (textoTarea === "" || dataTareaStr === "") {
    listaTareas.innerHTML = "<div><p id='mensaje'></p></div>";
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "No puedes introducir valores vacios";
    textoInput = "";
    dataInput = "";
    return;
  }

  let tarea = {
    id: dataTareaStr,
    nombre: textoTarea,
  };

  tareas.push(tarea);
  renderizarTareas();
}

function renderizarTareas() {
  let htmlTareas = tareas.map((elemento, index) => {
    return `<div class="tarea-item">
            <p>${elemento.id} ${elemento.nombre}</p>
            <button onclick="eliminarTarea(${index})">Eliminar</button>
            </div>`;
  });
  listaTareas.innerHTML = htmlTareas.join("");
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  renderizarTareas();
}
