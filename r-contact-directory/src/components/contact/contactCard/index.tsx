import React, { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { TbMailFilled } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import DropDownMenu from "@/components/UI/Dropdownmenu";

import Avatar from "../avatar";
import { contactData } from "../addNewContact/type";

type ContactCardProps = {
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: contactData;
  setDetails: (data: contactData) => void;
};

const ContactCard = ({
  data,
  setEditModalOpen,
  setDeleteModal,
  setDetails,
}: ContactCardProps) => {
  // console.log("data", data.name);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleEditClick = () => {
    setOpen(false);
    setEditModalOpen(true);
    // setDeleteModal(true)
    setDetails(data);
  };

  const handleDeleteClick = () => {
    setOpen(false);
    setDeleteModal(true);
    setDetails(data);
  };

  return (
    <div className="  bg-primary-2  p-3 rounded-lg relative">
      <div className="h-2/5 flex justify-center ">
        <Avatar data={data} />
        <div className="absolute right-0">
          <BsThreeDotsVertical
            className="text-primary-1 cursor-pointer mr-2"
            onClick={() => {
              setOpen(!isOpen);
            }}
            size={23}
          />
          {isOpen && (
            <DropDownMenu
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </div>
      </div>
      <div className="my-3 h-1/5  ">
        <h5 className="font-bold text-lg text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {data.id}:{data.name}
        </h5>
        <p className="font-semibold text-sm text-center mt-1">{data.title}</p>
        <p className="text-primary-1 font-normal text-sm text-center">
          {data.company}
        </p>
      </div>
      <div className="w-full h-2/5 my-5">
        <span className=" flex gap-5 items-center py-2">
          <HiPhone className="text-primary" size={17} />{" "}
          <p className="text-sm font-semibold">{data.phone}</p>
        </span>
        <span className="flex gap-5  items-center py-2">
          <TbMailFilled className="text-primary" size={17} />

          <p className="text-xs font-semibold">{data.email}</p>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
