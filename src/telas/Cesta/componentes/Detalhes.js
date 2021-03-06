import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

import TextoFontMontSerrat from "../../../componentes/TextoFontMontSerrat";

export default function Detalhes({
  logoFazenda,
  nomeCesta,
  nomeFazenda,
  descricao,
  preco,
  botao
}) {
  return (
    <>
      <TextoFontMontSerrat style={estilos.nomeCesta}>
        {nomeCesta}
      </TextoFontMontSerrat>

      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <TextoFontMontSerrat style={estilos.nomeFazenda}>
          {nomeFazenda}
        </TextoFontMontSerrat>
      </View>

      <TextoFontMontSerrat style={estilos.descricao}>
        {descricao}
      </TextoFontMontSerrat>
      <TextoFontMontSerrat style={estilos.preco}>{preco}</TextoFontMontSerrat>

      <TouchableOpacity style={estilos.botao}>
        <TextoFontMontSerrat style={estilos.textoBotao}>
          {botao}
        </TextoFontMontSerrat>
        </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    //largura da linha em q vai ficar o texto
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    //mudar a posicao dos componentes dentro da view para linha, um ao lado do outro
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    marginTop: 2,
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
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    //margem em cima e embaixo
    paddingVertical: 16,
    //arrendondar os cantos
    borderRadius: 6,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
});
