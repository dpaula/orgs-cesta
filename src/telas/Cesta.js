import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da Cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nomeCesta}>Cesta de Verduras</Text>
        <Text style={estilos.nomeFazenda}>Blu Verde</Text>

        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadozamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    //Altura da Imagem / Largura da imagem * Largura da tela
    height: (578 / 768) * width,
  },
  titulo: {
    //define um componente sobre o outro
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
    color: "white",
    fontWeight: "bold",
    padding: 18,
  },
  cesta: {
    //espaco verticalmente, acima e abaixo
    paddingVertical: 8,
    //espaco horizontal, esquerda e direita
    paddingHorizontal: 16,
  },
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    //largura da linha em q vai ficar o texto
    lineHeight: 42,
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
