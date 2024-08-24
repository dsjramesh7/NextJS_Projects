import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { contactData } from "../addNewContact/type";
import { addContactValidationSchema } from "../addNewContact/schema";

type CandidateFormProps = {
  initialValues: contactData;
  handleSubmit: (
    values: contactData,
    formikHelpers: FormikHelpers<contactData>
  ) => void | Promise<any>;
  loading?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CandidateForm = ({
  handleSubmit,
  initialValues,
  loading,
  setOpen,
}: CandidateFormProps) => {
  return (
    <Formik<contactData>
      initialValues={initialValues}
      validationSchema={addContactValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ submitForm ,values}) => {
        console.log("values",values);
        
        return (
          <Form>
            <Input
              labelName="Name"
              type="text"
              placeholder="Full Name"
              name="name"
            />
            <div className="flex flex-row gap-4">
              <Input
                labelName="Email"
                type="text"
                placeholder="Enter Email"
                name="email"
              />
              <Input
                labelName="Phone Number"
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
              />
            </div>
            <div className="flex flex-row gap-4">
              <Input
                labelName="Company"
                type="text"
                placeholder="Company Name"
                name="company"
              />
              <Input
                labelName="Designation"
                type="text"
                placeholder="Enter Designation"
                name="title"
              />
            </div>
            <div className="w-2/3 m-auto  p-3 flex justify-between items-center mt-3">
              <Button
                loading={loading}
                color="primary"
                type="button"
                onClick={submitForm}
              >
                Save
              </Button>

              <Button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CandidateForm;
