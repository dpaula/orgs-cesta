import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import TextoFontMontSerrat from "../../componentes/TextoFontMontSerrat";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <TextoFontMontSerrat style={estilos.titulo}>
                  {itens.titulo}
                </TextoFontMontSerrat>
              </View>
            </>
          );
        }}
      />
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
  titulo: {
    fontSize: 20,
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    lineHeight: 24,
    marginBottom: 8,
  },
});
