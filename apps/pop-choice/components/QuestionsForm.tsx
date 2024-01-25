import { Control, FormProvider, useForm } from "react-hook-form";
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
  onSubmit: (data: any) => void;
};
export const QuestionsForm: React.FC<QuestionFormProps> = ({
  questions,
  buttonText,
  onSubmit,
}) => {
  const formMethods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <View style={styles.container}>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
        <Button
          style={styles.button}
          text={buttonText}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </FormProvider>
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
