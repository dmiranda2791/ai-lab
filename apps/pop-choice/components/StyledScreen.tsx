import { StyleSheet, View, ViewProps } from "react-native";

export const StyledScreen: React.FC<ViewProps> = ({ children }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000C36",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 500,
  },
});
