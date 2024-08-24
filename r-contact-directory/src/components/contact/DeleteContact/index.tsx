import React from "react";
import { contactData } from "../addNewContact/type";
import Modal from "@/components/UI/Modal";
import Button from "@/components/UI/Button";
import { useDeleteCardMutation, useGetCardsQuery } from "@/redux/api";

type DeleteContact = {
  contactDetails?: contactData;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DeleteContact = ({ setOpen, contactDetails, open }: DeleteContact) => {
  const [deleteCard,{isLoading}] = useDeleteCardMutation();
  const { refetch} = useGetCardsQuery();

  const handleDelete = async () => {
    await deleteCard({
      id: contactDetails?.id,
    });

    await refetch();
    setOpen(false)
  };
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <div className="">
        <h1>Are you sure want to delete this contact?</h1>
        <div className="flex justify-between mt-5">
          <Button loading={isLoading} onClick={handleDelete}>
            Confirm
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="secondary"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteContact;
