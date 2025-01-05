import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";
import InputComponent from "./InputComponent";

const CreateContentModel = ({
  open,
  onclose,
}: {
  open: boolean;
  onclose: () => void;
}) => {
  return (
    <div>
      {open && (
        <div className="bg-gray-800 fixed h-screen w-full top-0 left-0 opacity-40 flex items-center justify-center">
          <div className="">
            <div className="bg-white opacity-100 text-black px-4 py-8 rounded shadow-lg border">
              <div className="text-black font-bold flex justify-end mb-8 mt-[-10px]">
                <div onClick={onclose} className="cursor-pointer">
                  <CloseIcon />
                </div>
              </div>
              <div>
                <InputComponent placeholder="Title" onchange={() => {}} />
              </div>
              <div className="mt-4">
                <InputComponent placeholder="Link" onchange={() => {}} />
              </div>
              <div className="mt-4">
                <InputComponent placeholder="type" onchange={() => {}} />
              </div>
              <div className="flex justify-center mt-5">
                <span className="text-black bg-white opacity-100">
                  <Button varient="primary" text="submit" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModel;
