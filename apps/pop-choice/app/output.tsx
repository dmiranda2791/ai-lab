import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";

export default function Output() {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>School of Rock (2009)</Text>
      <Text style={styles.description}>
        A fun and stupid movie about a wannabe rocker turned fraud substitute
        teacher forming a rock band with his students to win the Battle of the
        Bands
      </Text>
      <Button style={styles.button} text="Go again!" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, marginTop: 50 },
  title: {
    color: "#FFFFFF",
    fontFamily: "RobotoSlab",
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    color: "#FFFFFF",
    fontFamily: "RobotoSlab",
    fontSize: 18,
    marginTop: 18,
    marginBottom: 18,
  },
  button: {
    marginTop: "auto",
  },
});
