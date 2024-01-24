import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StyledScreen } from "../components/StyledScreen";
import { Header } from "../components/Header";

export default function RootLayout() {
  const [loaded] = useFonts({
    "CarterOne-Regular": require("../assets/fonts/CarterOne/CarterOne-Regular.ttf"),
    RobotoSlab: require("../assets/fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <StyledScreen>
      <Header />
      <Slot />
    </StyledScreen>
  );
}
