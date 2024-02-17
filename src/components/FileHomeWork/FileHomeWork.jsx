import React from "react";
import Image from "react-bootstrap/Image";
import "./fileHomeWork.css";
import RemoveCloseButtons from "../Buttons/RemoveCloseButtons/RemoveCloseButtons";

const FileHomeWork = ({ file, state, files }) => {
  const removeFile = () => {
    console.log("click");
    const arrTmp = files.filter((el) => {
      if (el.name === file.name) return false;
      return true;
    });
    state(arrTmp);
  };

  return (
    <div className="wrap_images pt-2">
      <div className="position-relative">
        <picture>
          <Image src={URL.createObjectURL(file)} thumbnail />
        </picture>
        <div className="position-absolute top-0 end-0 mt-2 me-2">
          <div onClick={removeFile}>
            <RemoveCloseButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileHomeWork;
