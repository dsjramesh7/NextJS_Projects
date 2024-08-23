import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";

const DropDownMenu = ({ handleEditClick,handleDeleteClick }) => {

  return (
    <div className="w-28 absolute left-1 z-10 top-8  rounded-lg border-[1px] bg-background-DEAFAULT border-primary-1 text-xs text-primary-1 p-3 flex flex-col">
      <button
        onClick={handleEditClick}
        className="flex items-center  cursor-pointer "
      >
        <BiEditAlt
          size={23}
          className="p-1 mr-2 bg-white rounded-lg text-center mb-1"
        />
        <p className="font-medium text-sm">Edit</p>
      </button>

      <button
        onClick={handleDeleteClick}
        className="flex items-center cursor-pointer hover:text-red-600 "
      >
        <AiTwotoneDelete
          size={23}
          className="p-1 mr-2 bg-white  rounded-lg text-center"
        />
        <p className="font-medium  text-sm">Delete</p>
      </button>
    </div>
  );
};

export default DropDownMenu;
