import React from "react";

import { StyleSheet, Image, Dimensions } from "react-native";

//pegando a imagem do topo
import topo from "../../../../assets/topo.png";

import TextoFontMontSerrat from "../../../componentes/TextoFontMontSerrat";

//pegando o tamanho da tela (largura)
const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <TextoFontMontSerrat style={estilos.titulo}>{titulo}</TextoFontMontSerrat>
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
});
