import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    //espaco verticalmente, acima e abaixo
    paddingVertical: 8,
    //espaco horizontal, esquerda e direita
    paddingHorizontal: 16,
  },
});
