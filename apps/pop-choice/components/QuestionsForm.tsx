import { useForm } from "react-hook-form";
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
};
export const QuestionsForm: React.FC<QuestionFormProps> = ({
  questions,
  buttonText,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <Question key={question.id} control={control} question={question} />
      ))}
      <Button
        style={styles.button}
        text={buttonText}
        onPress={handleSubmit(onSubmit)}
      />
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
