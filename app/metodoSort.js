let ordernarPorPreco = document.getElementById("btnOrdenarPorPreco");

ordernarPorPreco.addEventListener("click", ordernarLivrosPorPreco)

function ordernarLivrosPorPreco () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}