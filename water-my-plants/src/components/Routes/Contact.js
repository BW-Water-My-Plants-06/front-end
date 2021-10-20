import React from "react";
import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required("Please enter a name"),
  email: Yup.string()
    .required("Please enter a valid email")
    .email("Please enter a valid email"),
  message: Yup.string().required("Please enter a message"),
});

export default function Contact() {
  const fields = [
    { id: "name", type: "text", label: "Name" },
    { id: "email", type: "text", label: "Email Address" },
    { id: "message", type: "textarea", label: "Message" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const submit = (e) => {
    e.preventDefault();
    // post contact submit code
  };

  return (
    <div className="form-container">
      <h2>Get In Touch</h2>
      <form onSubmit={submit}>
        <FormBuilder
          fields={fields}
          init={init}
          submitText="Sign In"
          validationSchema={contactFormSchema}
        />
      </form>
    </div>
  );
}