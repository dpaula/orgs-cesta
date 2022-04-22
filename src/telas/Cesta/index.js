import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens {...itens} />
      </View>
    </ScrollView>
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
