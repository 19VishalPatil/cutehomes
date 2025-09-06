import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface MediaInputProps {
  required?: boolean;
  error?: string[];
}

function MediaInput({ required = true, error }: MediaInputProps) {
  return (
    <div className="mb-2 grid gap-3">
      <Label htmlFor="file" className="capitalize">
        Media File
      </Label>
      <Input
        id="file"
        name="files"
        type="file"
        accept="image/*,video/*"
        multiple
        required={required}
      />
      {error && <p className="text-sm text-red-400">{error.join(", ")}</p>}
    </div>
  );
}
export default MediaInput;
