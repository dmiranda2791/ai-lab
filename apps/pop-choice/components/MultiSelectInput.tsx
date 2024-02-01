import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { InputOption } from "../models/input";

type MultiselectInputProps = {
  label: string;
  options: InputOption[];
  value: InputOption[];
  onChange: (value: InputOption[]) => void;
};

const MultiSelectInput: React.FC<MultiselectInputProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const toggleOption = (option: InputOption) => {
    onChange(
      value.find(({ id }) => id == option.id)
        ? value.filter(({ id }) => id !== option.id)
        : [...value, option]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.option,
              value.find(({ id }) => id == option.id)
                ? styles.optionSelected
                : {},
            ]}
            onPress={() => toggleOption(option)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    fontFamily: "RobotoSlab",
    fontSize: 16,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    padding: 10,
    backgroundColor: "#3B4877",
    borderRadius: 5,
  },
  optionSelected: {
    backgroundColor: "blue",
  },
  optionText: {
    color: "#FFFFFF",
  },
});

export default MultiSelectInput;
