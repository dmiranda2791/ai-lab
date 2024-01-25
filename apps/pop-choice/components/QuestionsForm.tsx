import { Control, useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Question } from "./Question";
import { Button } from "./Button";

type Question = {
  id: number;
  name: string;
  text: string;
};

type QuestionFormProps = {
  questions: Question[];
  buttonText: string;
  control: Control<any>;
  onSubmit: (data: any) => void;
};
export const QuestionsForm: React.FC<QuestionFormProps> = ({
  questions,
  buttonText,
  control,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <Question key={question.id} control={control} question={question} />
      ))}
      <Button style={styles.button} text={buttonText} onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    marginTop: "auto",
  },
});
