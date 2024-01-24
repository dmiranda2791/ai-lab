import { StyleSheet, Pressable, PressableProps, Text } from "react-native";

type ButtonProps = PressableProps & {
  text: string;
};
export const Button: React.FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#51E08A",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontFamily: "RobotoSlab",
    fontWeight: "bold",
    fontSize: 30,
  },
});
