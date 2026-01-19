// clases utilizados: class ItemCarro Carro Producto
// funciones utilizadas: calcularPrezoConIVA() calcularSubtotal() actualizarCantidade(novaCantidade) engadirItem(producto, cantidade) eliminarItem(produtoID) calcularTotal() gardarCarriño() cargarProductosDesdeJSON() renderizarProductos() engadirProductoOCarrito() renderizarCarriño()
let listaProductosUl = document.getElementById("lista-produtos");

const IVA = 0.21;
class Producto {
  constructor(nome, prezoUnitario, stock, descripcion, emoji) {
    ((this.nome = nome),
      (this.prezoUnitario = prezoUnitario),
      (this.stock = stock),
      (this.descripcion = descripcion),
      (this.emoji = emoji));
  }

  calcularPrezoConIva() {
    let prezo = this.prezoUnitario * IVA;
    return prezo;
  }
}

class ItemCarro {
  constructor(producto, cantidade) {
    ((this.producto = producto), (this.cantidade = cantidade));
  }

  calcularSubtotal() {
    return producto.prezo * cantidade;
  }

  actualizarCantidade(novaCantidade) {
    this.cantidade = novaCantidade;
  }
}

class Carro {
  constructor(cantidade) {
    this.cantidade = cantidade;
  }
}

async function cargarProductosDesdeJSON() {
  try {
    let resposta = await fetch("./productos.json");
    if (!resposta.ok) throw new Error(`HTTP error ${resposta.status}`);
    let datos = await resposta.json();

    produtosDispoñibles = datos.map(
      (p) =>
        new Producto(
          p.id,
          p.nome,
          p.prezoUnitario,
          p.stock,
          p.descripcion,
          p.emoji,
        ),
    );
    return produtosDispoñibles;
  } catch (error) {
    console.error("Erro cargando productos.json: ", error);
    if (listaProductosUl) {
      listaProductosUl.innerHTML = `<li class="erro">Non se puido cargar a lista de produtos. Intente recargar a paxina</li>`;
    }
  }
}

function renderizarProdutos() {
  listaProductosUl.innerHTML = "";
  try {
    let arrayProdutos = cargarProductosDesdeJSON();
    arrayProdutos.array.forEach((p) => {
      let li = document.createElement("li");
      li.className = "producto-item";
      let prezoIVA = p.calcularPrezoConIva();
      li.innerHTML = `
            <span>${p.emoji} ${p.nome}</span>
            <p class="descripcion">${p.descripcion}</p>
            <span>${prezoIVA.toFixed(2)} (IVA incluido) || Stock: ${p.stock}</span>
            <button class="verde">Engadir</button>
        `;

      listaProductosUl.appendChild(li);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await cargarProductosDesdeJSON();
  renderizarProdutos();
  //   renderizarCarriño();
});
