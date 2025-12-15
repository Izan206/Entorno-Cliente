function obterDatos(url) {
  return fetch(url).then(res => res.json());
}

async function obterMultiple() {
  try {
    const [post1, post2] = await Promise.all([
      obterDatos("https://jsonplaceholder.typicode.com/posts/1"),
      //   fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json()),
      obterDatos("https://jsonplaceholder.typicode.com/posts/2"),
      //   fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json()),
    ]);
    console.log("Post 1:", post1);
    console.log("Post 2:", post2);
  } catch (erro) {
    console.error("Erro na execución concorrente:", erro);
  }
}
obterMultiple();
