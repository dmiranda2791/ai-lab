import { StyleSheet } from "react-native";
import { Image } from "expo-image";

export const Icon = () => {
  return (
    <Image
      style={styles.image}
      source={require("../assets/pop-choice-icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 108,
    width: 99,
  },
});
