type AlgorithmType = {
  title: string
  description: string
  date: string
}

export const algorithms: AlgorithmType[] = [
  {
    title: '🔍 Busca Binária',
    description: `Imagine uma biblioteca gigante onde você precisa encontrar um livro específico. Em vez de olhar livro por livro, você vai direto para o meio da biblioteca. Se o livro que quer está depois, vai para a metade direita; se está antes, vai para a metade esquerda. É como um jogo de "mais ou menos" onde você elimina metade das possibilidades a cada tentativa.`,
    date: '1940',
  },
  {
    title: '🔀 Ordenação por Seleção',
    description: `Imagine organizar cartas de baralho em ordem crescente. Você procura a carta com menor valor e coloca no começo. Depois procura a segunda menor e coloca na segunda posição. Repete esse processo até todas as cartas estarem ordenadas. É como escolher o menor a cada passo.`,
    date: '1960',
  },
  {
    title: '🔁 Recursão',
    description: `Imagine recursão como uma boneca russa (matryoshka). Cada boneca contém uma boneca menor dentro, que por sua vez contém outra ainda menor, e assim sucessivamente até chegar à boneca mais pequenina.`,
    date: '1940',
  },
  {
    title: '🗺️ Algoritmo de Dijkstra',
    description: `Imagine planejar a rota mais rápida em um mapa. Você vai calculando o caminho mais curto, sempre escolhendo o trajeto que gasta menos energia ou tempo. Como um GPS inteligente que sempre encontra o melhor caminho.`,
    date: '1956',
  },
  {
    title: '🚀 Algoritmo Quicksort',
    description: `Imagine uma fila de pessoas que você quer ordenar por altura. Você escolhe uma pessoa como "pivô" e separa todos mais altos para um lado, mais baixos para outro. Depois repete esse processo para cada grupo. É como fazer "divisões rápidas" até tudo ficar organizado.`,
    date: '1960',
  },
  {
    title: '🌐 Busca em Largura',
    description: `Pense em explorar um labirinto. Em vez de ir fundo em um caminho, você vai explorando todos os caminhos próximos primeiro. Como se espalhasse uma rede de busca, olhando tudo ao redor antes de ir mais fundo.`,
    date: '1950',
  },
  {
    title: '🧩 Programação Dinâmica',
    description: `É como resolver um quebra-cabeça guardando as peças que já funcionaram. Você resolve problemas menores e vai guardando as soluções para usar depois, evitando refazer trabalho. Como um chef que prepara ingredientes com antecedência.`,
    date: '1950',
  },
  {
    title: '🎲 Algoritmo Guloso',
    description: `Imagine escolher sempre a melhor opção no momento, sem pensar muito no futuro. Como alguém que em um jogo sempre faz a jogada que parece dar mais pontos agora, sem estratégia de longo prazo.`,
    date: '1970',
  },
  {
    title: '🗃️ Tabela Hash',
    description: `Pense em uma biblioteca onde cada livro tem um código único e específico. Você pode encontrar qualquer livro instantaneamente, sem precisar procurar um por um. Como um sistema de arquivos super rápido.`,
    date: '1950',
  },
  {
    title: '🤖 K-Vizinhos Mais Próximos',
    description: `É como classificar algo olhando para seus "vizinhos" mais parecidos. Por exemplo, para recomendar um filme, você olha filmes parecidos que alguém já gostou. Como um assistente que aprende com exemplos próximos.`,
    date: '1960',
  },
]
