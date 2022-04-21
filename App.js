import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Cesta from "./src/telas/Cesta";

export default function App() {
  
  //carrega as fontes do google
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold
  });

  //se as fontes nao estiverem carregadas, mostra um loading
  if (!fonteCarregada) {
    return <View />;
  }

  //se as fontes estiverem carregadas, mostra o app
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
