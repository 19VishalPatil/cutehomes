import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputNumberProps = {
  name: string;
  defaultValue?: number;
};

function PriceInput({ name, defaultValue }: FormInputNumberProps) {
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
      />
    </div>
  );
}
export default PriceInput;
