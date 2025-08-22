import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface MediaInputProps {
  required?: boolean; // optional now
}

function MediaInput({ required = true }: MediaInputProps) {
  return (
    <div className="mb-2">
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
    </div>
  );
}
export default MediaInput;
