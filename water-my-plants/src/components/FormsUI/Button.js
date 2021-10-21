import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";

const ButtonWapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSumbit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSumbit,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWapper;
