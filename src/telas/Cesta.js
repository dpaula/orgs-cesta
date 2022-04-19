import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhe da Cesta</Text>
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
    padding: 18
  },
});
