import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Link, useLocalSearchParams } from "expo-router";

export default function Output() {
  const params = useLocalSearchParams();
  const { title, year, message: description } = params;
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{`${title} (${year})`}</Text>
      <Text style={styles.description}>{description}</Text>

      <Link
        href={{
          pathname: "/",
        }}
      >
        <Button style={styles.button} text="Go again!" />
      </Link>
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
