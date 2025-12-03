const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];


// exercicio 1
function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(p => p.categoria === categoria);
}

// exercicio 2
function produtosDisponiveis(produtos) {
  return produtos.filter(p => p.estoque > 0);
}

// exercicio 3
function valorTotalEstoque(produtos) {
  return produtos
    .map(p => p.preco * p.estoque) // map
    .reduce((total, valor) => total + valor, 0); // reduce
}

//exercicio 4
function aplicarDescontos(produtos) {
  return produtos.map(p => ({
    ...p,
    precoFinal: p.preco - (p.preco * p.desconto / 100)
  }));
}

// exercicio 5
function produtoMaisCaro(produtos) {
  return produtos.reduce((maior, p) => 
    p.preco > maior.preco ? p : maior
  );
}

// exercicio 6
function listarNomes(produtos) {
  return produtos.map(p => p.nome);
}

// exercicio 7
function produtosCarosDisponiveis(produtos) {
  return produtos.filter(p => p.preco > 300 && p.estoque > 0);
}

// exercicio 8
function mediaPrecoPorCategoria(produtos) {
  const categorias = [...new Set(produtos.map(p => p.categoria))];

  const resultado = {};

  categorias.forEach(cat => {
    const daCategoria = produtos.filter(p => p.categoria === cat);
    const media = daCategoria.reduce((soma, p) => soma + p.preco, 0) / daCategoria.length;

    resultado[cat] = media;
  });

  return resultado;
}

// exercicio 9
function top3MaisCaros(produtos) {
  return [...produtos]
    .sort((a, b) => a.preco - b.preco) // do menor para o maior
    .reverse()                        // agora maior → menor
    .slice(0, 3);                     // pega os 3 primeiros
}

// exercicio 10
function estatisticasEstoque(produtos) {
  return {
    totalProdutos: produtos.length,
    totalEmEstoque: produtos.filter(p => p.estoque > 0).length,
    totalEmFalta: produtos.filter(p => p.estoque === 0).length,
    valorTotal: valorTotalEstoque(produtos),
    precoMedio: produtos.reduce((soma, p) => soma + p.preco, 0) / produtos.length,
    produtoMaisCaro: produtoMaisCaro(produtos),
    produtoMaisBarato: produtos.reduce((menor, p) =>
      p.preco < menor.preco ? p : menor
    ),
    categorias: [...new Set(produtos.map(p => p.categoria))]
  };
}

// exercicio 11
function buscarProduto(produtos, termo) {
  termo = termo.toLowerCase();
  return produtos.filter(p =>
    p.nome.toLowerCase().includes(termo)
  );
}

// exercicio 12
function agruparPorCategoria(produtos) {
  return produtos.reduce((grupo, p) => {
    if (!grupo[p.categoria]) grupo[p.categoria] = [];
    grupo[p.categoria].push(p); // pilha (push)
    return grupo;
  }, {});
}





