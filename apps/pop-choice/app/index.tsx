import { FormProvider, useForm } from "react-hook-form";
import { router } from "expo-router";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export default function StartView() {
  const formMethods = useForm();

  const { handleSubmit } = formMethods;

  const onSubmit = ({ numberOfPeople, timeAvailable }) => {
    router.push({
      pathname: "/questions",
      params: { numberOfPeople, timeAvailable },
    });
  };

  return (
    <FormProvider {...formMethods}>
      <TextInput name="numberOfPeople" placeholder="How many people?" />
      <TextInput
        name="timeAvailable"
        placeholder="How much time do you have?"
      />
      <Button text="Start" onPress={handleSubmit(onSubmit)} />
    </FormProvider>
  );
}
