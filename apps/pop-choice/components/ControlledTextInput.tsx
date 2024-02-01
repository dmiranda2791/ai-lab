import { View, StyleSheet, TextInput, Text } from "react-native";
import { Controller, useFormContext } from "react-hook-form";

type ControlledTextInputProps = {
  label: string;
  name: string;
};

export const ControlledTextInput: React.FC<ControlledTextInputProps> = ({
  label,
  name,
}) => {
  const { control } = useFormContext();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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
        name={name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
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
