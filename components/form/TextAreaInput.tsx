import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
  error?: string[];
};

function TextAreaInput({
  name,
  labelText,
  defaultValue,
  required = false,
  error,
}: TextAreaInputProps) {
  return (
    <div className="mb-2 grid gap-3">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required={required}
        className={
          error
            ? "border-red-500 focus:border-red-500 leading-loose"
            : "leading-loose"
        }
      />
      {error && <p className="text-sm text-red-400">{error.join(", ")}</p>}
    </div>
  );
}

export default TextAreaInput;
