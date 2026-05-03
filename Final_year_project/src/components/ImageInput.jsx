import { putImage } from "@/lib/b_req";
import { Input } from "./ui/input";

function ImageInput({ onChange, value }) {
  const handleFileChange = async (e) => {

    console.log(e.target.files);
    try {
      if (!e.target.files) {
        return;
      }
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      //const url = "https://via.placeholder.com/150";
      const publicUrl = await putImage({ file });

      console.log(publicUrl);
      //console.log(url);
      onChange(publicUrl);
      //onChange(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input type="file" accept="image/png, image/jpeg, application/pdf" onChange={handleFileChange} />
    </div>
  );
}

export default ImageInput;