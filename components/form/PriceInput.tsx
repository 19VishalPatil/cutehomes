import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputNumberProps = {
  name: string;
  defaultValue?: number;
  error?: string[];
};

function PriceInput({ name, defaultValue, error }: FormInputNumberProps) {
  return (
    <div className="mb-2 grid gap-3">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
        className={error ? "border-red-500 focus:border-red-500" : ""}
      />
      {error && <p className="text-sm text-red-400">{error.join(", ")}</p>}
    </div>
  );
}
export default PriceInput;
