import React from "react";
import { StyleSheet, Image, View } from "react-native";

import TextoFontMontSerrat from "../../../componentes/TextoFontMontSerrat";
import logo from "../../../../assets/logo.png";

export default function Detalhes() {
  return (
    <>
      <TextoFontMontSerrat style={estilos.nomeCesta}>
        Cesta de Verduras
      </TextoFontMontSerrat>

      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <TextoFontMontSerrat style={estilos.nomeFazenda}>
          Blu Verde
        </TextoFontMontSerrat>
      </View>

      <TextoFontMontSerrat style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadozamente da fazenda direto
        para sua cozinha
      </TextoFontMontSerrat>
      <TextoFontMontSerrat style={estilos.preco}>R$ 40,00</TextoFontMontSerrat>
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
});
