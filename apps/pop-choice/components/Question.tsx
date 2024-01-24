import { View, StyleSheet, TextInput, Text } from "react-native";
import { Controller } from "react-hook-form";

type Question = {
  id: number;
  name: string;
  text: string;
};
type QuestionProps = {
  question: Question;
  control: any;
};
export const Question: React.FC<QuestionProps> = ({ question, control }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{question.text}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={question.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },

  label: {
    color: "#FFFFFF",
    fontFamily: "RobotoSlab",
    fontSize: 16,
  },
  input: {
    marginTop: 10,
    fontFamily: "RobotoSlab",
    color: "#FFFFFF",
    backgroundColor: "#3B4877",
    fontWeight: "300",
    fontSize: 14,
    borderRadius: 10,
    padding: 10,
  },
});
