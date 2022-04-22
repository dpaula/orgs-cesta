import React from "react";

import { Image, View, StyleSheet } from "react-native";

import TextoFontMontSerrat from "../../../componentes/TextoFontMontSerrat";

export default function Itens({ titulo, lista }) {
  return (
    <>
      <TextoFontMontSerrat style={estilos.titulo}>{titulo}</TextoFontMontSerrat>
      {lista.map(({ nome, icone }) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image source={icone} style={estilos.icone} />
            <TextoFontMontSerrat style={estilos.nome}>{nome}</TextoFontMontSerrat>
          </View>
        );
      })}
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    lineHeight: 24,
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    //borda inferior com espaco de 1px
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    //espaco vertical, acima e abaixo
    paddingVertical: 16,
  },
  icone: {
    width: 44,
    height: 44,
  },
  nome: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
    color: "#464646",
  },
});
