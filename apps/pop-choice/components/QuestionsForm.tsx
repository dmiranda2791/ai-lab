import { useForm } from "react-hook-form";
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
    <>
      {questions.map((question) => (
        <Question key={question.id} control={control} question={question} />
      ))}
      <Button text={buttonText} onPress={handleSubmit(onSubmit)} />
    </>
  );
};
