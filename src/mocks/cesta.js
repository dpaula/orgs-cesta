import logo from "../../assets/logo.png";

import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brocolis.png";
import abobora from "../../assets/frutas/Abobora.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";

const cesta = {
  topo: {
    titulo: "Detalhe da Cesta",
  },
  detalhes: {
    logoFazenda: logo,
    nomeCesta: "Cesta de Verduras",
    nomeFazenda: "Blu Verde",
    descricao:
      "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da Cesta",
    lista: [
      {
        nome: "Tomate",
        icone: tomate,
      },
      {
        nome: "Brócolis",
        icone: brocolis,
      },
      {
        nome: "Abóbora",
        icone: abobora,
      },
      {
        nome: "Batata",
        icone: batata,
      },
      {
        nome: "Pepino",
        icone: pepino,
      },
    ],
  },
};

export default cesta;
