import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";
import { Input, InputOption } from "../models/input";
import { ControlledTextInput } from "./ControlledTextInput";
import { ControlledMultiSelectInput } from "./ControlledMultiSelectInput";
import { useEffect, useState } from "react";
import { useHeaderTitle } from "./HeaderContext";

type DynamicFormProps = {
  inputs: Input[];
  numberOfPeople: number;
  buttonText: string;
  onSubmit: (data: any) => void;
};

type FormData = {
  participants: [
    {
      favoriteMovie: string;
      mood: InputOption[];
      famousPerson: string;
    },
  ];
};

export const DynamicForm: React.FC<DynamicFormProps> = ({
  inputs,
  buttonText,
  numberOfPeople,
}) => {
  const { setHeaderTitle } = useHeaderTitle();

  const defaultValues = { favoriteMovie: "", mood: [], famousPerson: "" };
  const formMethods = useForm<FormData>({
    defaultValues: {
      participants: [defaultValues],
    },
  });
  const { handleSubmit, control } = formMethods;

  const { fields, append } = useFieldArray({
    control,
    name: "participants",
  });

  const [currentParticipantIndex, setCurrentParticipantIndex] = useState(0);

  useEffect(() => {
    if (currentParticipantIndex < numberOfPeople) {
      setHeaderTitle(`${currentParticipantIndex + 1}`);
    } else {
      setHeaderTitle(); // No argument passed, default to "PopChoice"
    }
  }, [currentParticipantIndex, numberOfPeople, setHeaderTitle]);

  const onSubmit = (data) => {
    console.log(data.participants[currentParticipantIndex]);

    // Check if we need to add another participant form or submit the final data
    if (currentParticipantIndex + 1 < numberOfPeople) {
      setCurrentParticipantIndex(currentParticipantIndex + 1);
      append(defaultValues);
    } else {
      setHeaderTitle();
      // Here you can handle the final submission of all participants' data
      console.log("All participants:", data.participants);
    }
  };

  console.log({
    currentParticipantIndex,
    numberOfPeople,
    fields: fields.length,
  });

  return (
    <FormProvider {...formMethods}>
      <View style={styles.container}>
        {fields.map((participant, index) => {
          if (index !== currentParticipantIndex) {
            return null;
          }

          return inputs.map((input) => {
            switch (input.inputType) {
              case "text":
                return (
                  <ControlledTextInput
                    key={input.id}
                    label={input.label}
                    name={`participants.${index}.${input.name}`}
                  />
                );
              case "multiselect":
                return (
                  <ControlledMultiSelectInput
                    name={`participants.${index}.${input.name}`}
                    key={input.id}
                    label={input.label}
                    options={input.options}
                  />
                );
            }
          });
        })}
        <Button
          style={styles.button}
          text={fields.length < numberOfPeople ? "Next Person" : "Get Movie"}
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
