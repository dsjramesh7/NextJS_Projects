import * as Yup from "yup";

export const addContactValidationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Enter valid email").required("Email is required"),
  phone: Yup.string()
    .max(10, "maximum number should be 10 digits")
    .min(10, "minimum number should be 10 digits")
    .required("A phone number is required"),
  company: Yup.string().required("Company Name  is required"),
  title: Yup.string().required("Your Designation is required"),
});
