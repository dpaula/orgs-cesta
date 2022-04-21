import React from "react";

import { Text, StyleSheet } from "react-native";

export default function TextoFontMontSerrat({ children, style }) {
  let estilo = estilos.texto;

  //seta o estilo passado pelo componente caso for negrito
  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrigo;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontSerratRegular",
    fontWeight: "normal",
  },
  textoNegrigo: {
    fontFamily: "MontSerratBold",
    fontWeight: "normal",
  },
});
