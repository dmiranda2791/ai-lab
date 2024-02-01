import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Link, router } from "expo-router";
import { Image } from "expo-image";
import { OutputDataContext } from "../components/OutputDataContext";
import { useContext, useState } from "react";

export default function Output() {
  const { outputData } = useContext(OutputDataContext);
  const [currentOutputIndex, setCurrentOutputIndex] = useState(0);

  if (outputData.length === 0) {
    router.push("/");
  }

  const {
    title,
    year,
    message: description,
    posterUrl,
  } = outputData[currentOutputIndex];

  const handlePress = () => {
    if (currentOutputIndex < outputData.length - 1) {
      setCurrentOutputIndex(currentOutputIndex + 1);
    } else {
      setCurrentOutputIndex(0);
      router.push("/");
    }
  };
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{`${title} (${year})`}</Text>
      <Image source={{ uri: posterUrl }} style={styles.poster} />
      <Text style={styles.description}>{description}</Text>

      <Button
        onPress={handlePress}
        style={styles.button}
        text={
          currentOutputIndex < outputData.length - 1
            ? "Next Movie"
            : "Go again!"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 50,
    alignContent: "center",
    alignItems: "center",
    maxWidth: 500,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "RobotoSlab",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 18,
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
  poster: {
    borderRadius: 10,
    width: 300,
    height: 450,
    resizeMode: "contain",
  },
});
