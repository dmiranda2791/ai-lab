import { View, Text, StyleSheet } from "react-native";
import { Icon } from "./Icon";

export const Header: React.FC = () => {
  return (
    <View style={styles.view}>
      <Icon />
      <Text style={styles.text}>PopChoice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "CarterOne-Regular",
    fontSize: 45,
  },
});
