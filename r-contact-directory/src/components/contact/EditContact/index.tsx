import React from "react";
import { FormikHelpers } from "formik";

import { useEditCardMutation, useGetCardsQuery } from "@/redux/api";
import Modal from "@/components/UI/Modal";
import CandidateForm from "../CandidateForm";
import { initialValues } from "../addNewContact/data";
import { contactData } from "../addNewContact/type";

type EditContactProps = {
  contactDetails?: contactData;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditContact = ({ contactDetails, setOpen, open }: EditContactProps) => {
  const editModalDetails = {
    heading: "Edit Contact",
    description: "Fill out the form to edit the member's details",
  };

  const [EditContact, { isLoading }] = useEditCardMutation();

  const { refetch } = useGetCardsQuery();

  const handleSubmit = async (
    values: contactData,
    { resetForm }: FormikHelpers<contactData>
  ) => {
    await EditContact(values);

    await refetch();

    resetForm({
      values: initialValues,
    });
    setOpen(false);
  };

  return (
    <Modal open={open} onOpenChange={setOpen} modalDetails={editModalDetails}>
      {/* <div>
        <div>
          <h1></h1>
          <p></p>
        </div> */}
      <CandidateForm
        handleSubmit={handleSubmit}
        initialValues={contactDetails!}
        loading={isLoading}
        setOpen={setOpen}
      />
      {/* </div> */}
    </Modal>
  );
};

export default EditContact;
