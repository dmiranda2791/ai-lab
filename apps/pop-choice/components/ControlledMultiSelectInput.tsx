import { Controller } from "react-hook-form";
import MultiSelectInput from "./MultiSelectInput";

type ControlledMultiSelectInputProps = {
  name: string;
  label: string;
  options: { id: string; label: string; value: string }[];
};

export const ControlledMultiSelectInput: React.FC<
  ControlledMultiSelectInputProps
> = ({ name, options, label }) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <MultiSelectInput
          label={label}
          options={options}
          onChange={onChange}
          value={value}
        />
      )}
      name={name}
    />
  );
};
