import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";

//aponta para pasta Cesta, onde tem o index.js
import Cesta from "./src/telas/Cesta";

import mockCesta from "./src/mocks/cesta";

export default function App() {
  //carrega as fontes do google
  const [fonteCarregada] = useFonts({
    MontSerratRegular: Montserrat_400Regular,
    MontSerratBold: Montserrat_700Bold,
  });

  //se as fontes nao estiverem carregadas, mostra um loading
  if (!fonteCarregada) {
    return <AppLoading />;
  }

  //se as fontes estiverem carregadas, mostra o app
  return (
    //SafeAreaView é uma view que faz com que o statusbar nao fique sobreposto ao conteudo
    //stilo com flex 1, para que o conteudo fique no centro, do tamnho da tela
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mockCesta} />
    </SafeAreaView>
  );
}
