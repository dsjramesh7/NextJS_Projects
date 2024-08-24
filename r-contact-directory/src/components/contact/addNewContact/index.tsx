import React, { useState } from "react";
import { FormikHelpers } from "formik";
import { initialValues } from "./data";

import { useGetCardsQuery, usePostCardMutation } from "@/redux/api";

import Modal from "@/components/UI/Modal";
import CandidateForm from "../CandidateForm";
import Button from "@/components/UI/Button";
import { FaUserPlus } from "react-icons/fa6";
import { contactData } from "./type";

const AddNewContact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const NewModalDetails = {
    heading: "Add New Contact",
    description: "Fill out the form to add new member",
  };

  const [addContact, { isLoading }] = usePostCardMutation();

  const { refetch } = useGetCardsQuery();

  const handleSubmit = async (
    values: contactData,
    { resetForm }: FormikHelpers<contactData>
  ) => {
    console.log(values);
    await addContact({ ...values, id: Math.floor(Math.random() * 200) });
    setOpen(false);
    await refetch();
    resetForm({
      values: initialValues,
    });
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      modalDetails={NewModalDetails}
      trigger={
        <Button color="primary">
          <FaUserPlus className="mr-2" size={18} /> <p>New Contact</p>
        </Button>
      }
    >
      <CandidateForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        setOpen={setOpen}
        loading={isLoading}
      />
    </Modal>
  );
};

export default AddNewContact;
