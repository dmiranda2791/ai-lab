import { View, Text, StyleSheet } from "react-native";
import { Icon } from "./Icon";
import { useHeaderTitle } from "./HeaderContext";

export const Header: React.FC = () => {
  const { headerTitle } = useHeaderTitle();
  return (
    <View style={styles.view}>
      <Icon />
      <Text style={styles.text}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "CarterOne-Regular",
    fontSize: 45,
  },
});
