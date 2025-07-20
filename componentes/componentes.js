async function carregarComponente(id, caminho) {
  const resposta = await fetch(caminho);
  const html = await resposta.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("header")) {
    carregarComponente("header", "/componentes/header.html");
  }
  if (document.getElementById("footer")) {
    carregarComponente("footer", "/componentes/footer.html");
  }
});
