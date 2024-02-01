import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";
import { Input, InputOption } from "../models/input";
import { ControlledTextInput } from "./ControlledTextInput";
import { ControlledMultiSelectInput } from "./ControlledMultiSelectInput";
import { useEffect, useState } from "react";
import { useHeaderTitle } from "./HeaderContext";
import { router } from "expo-router";

type DynamicFormProps = {
  inputs: Input[];
  numberOfPeople: number;
  buttonText: string;
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
      setHeaderTitle();
    }
  }, [currentParticipantIndex, numberOfPeople, setHeaderTitle]);

  const onSubmit = async (data) => {
    if (currentParticipantIndex + 1 < numberOfPeople) {
      setCurrentParticipantIndex(currentParticipantIndex + 1);
      append(defaultValues);
    } else {
      setHeaderTitle();

      const response = await fetch("/suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const json = await response.json();

      router.push({ pathname: "/output", params: json });
    }
  };

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
