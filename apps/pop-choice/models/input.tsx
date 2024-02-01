export interface Input {
  id: number;
  name: string;
  label: string;
  inputType: "text" | "multiselect";
  options?: { id: string; label: string; value: string }[];
}

export interface InputOption {
  id: string;
  label: string;
  value: string;
}
