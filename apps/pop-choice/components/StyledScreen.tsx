import { StyleSheet, View, ViewProps } from "react-native";

export const StyledScreen: React.FC<ViewProps> = ({ children }) => {
  return <View style={styles.view}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#000C36",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
