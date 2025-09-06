import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  error?: string[]; // array of error messages for this field
};

function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  required = false,
  error,
}: FormInputProps) {
  return (
    <div className="mb-2 grid gap-1">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={error ? "border-red-500 focus:border-red-500" : ""}
      />
      {error && <p className="text-sm text-red-400">{error.join(", ")}</p>}
    </div>
  );
}

export default FormInput;
