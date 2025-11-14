import { useState } from "react";

const ToggleProjectOpt = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div
          className={` h-50 w-50 p-2 ${toggle ? `bg-red-400` : `bg-green-400`}`}
          onClickCapture={() => {
            setToggle(!toggle);
          }}
        >
          <div className={`${toggle ? `bg-red-600` : `bg-green-600`}`}>
            <span>{toggle ? "on" : "off"}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToggleProjectOpt;
