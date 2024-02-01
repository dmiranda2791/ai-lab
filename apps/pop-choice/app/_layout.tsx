import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { StyledScreen } from "../components/StyledScreen";
import { Header } from "../components/Header";
import { HeaderProvider } from "../components/HeaderContext";
import { OutputDataProvider } from "../components/OutputDataContext";

export default function RootLayout() {
  const [loaded] = useFonts({
    "CarterOne-Regular": require("../assets/fonts/CarterOne/CarterOne-Regular.ttf"),
    RobotoSlab: require("../assets/fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <HeaderProvider>
      <OutputDataProvider>
        <StyledScreen>
          <Header />
          <Slot />
        </StyledScreen>
      </OutputDataProvider>
    </HeaderProvider>
  );
}
