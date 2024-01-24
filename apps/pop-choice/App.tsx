import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { QuestionsScreen } from "./screens/QuestionsScreen";
import { StyledScreen } from "./components/StyledScreen";

export default function App() {
  useFonts({
    "CarterOne-Regular": require("./assets/fonts/CarterOne/CarterOne-Regular.ttf"),
    RobotoSlab: require("./assets/fonts/RobotoSlab/RobotoSlab-VariableFont_wght.ttf"),
  });
  return (
    <StyledScreen>
      <QuestionsScreen />
      <StatusBar style="auto" />
    </StyledScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
