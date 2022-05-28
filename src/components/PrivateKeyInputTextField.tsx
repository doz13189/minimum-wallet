import React from "react";

// mui
import TextField from "@mui/material/TextField";

// model
import { handlePrivateKey } from "../models/PrivateKeyType";

type PrivateKeyInputTextFieldProps = {
  handlePrivateKey: handlePrivateKey;
};
const PrivateKeyInputTextField: React.FC<PrivateKeyInputTextFieldProps> = (
  props
) => {
  const { handlePrivateKey } = props;
  const onChangeEvent = (value: string) => {
    handlePrivateKey(value);
  };

  return (
    <TextField
      label="mnemonic"
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={(e) => onChangeEvent(e.target.value)}
    />
  );
};

export default PrivateKeyInputTextField;
