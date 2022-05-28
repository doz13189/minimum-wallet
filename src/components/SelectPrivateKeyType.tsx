import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// mui
import Typography from "@mui/material/Typography";

// model
import {
  PrivateKeyGenerateType,
  isPrivateKeyGenerateType,
} from "../models/PrivateKeyGenerateType";

type PrivateKeyTextFieldProps = {
  privateKeyGenerateType: string;
  handlePrivateKeyGenerateType: (value: PrivateKeyGenerateType) => void;
};

const SelectPrivateKeyType: React.FC<PrivateKeyTextFieldProps> = (props) => {
  const { privateKeyGenerateType, handlePrivateKeyGenerateType } = props;
  const onChangeEvent = (value: string) => {
    if (isPrivateKeyGenerateType(value)) {
      handlePrivateKeyGenerateType(value);
    }
    throw new Error("privateKeyGenerateType is not valid");
  };
  return (
    <FormControl>
      <Typography>秘密鍵の入力タイプを選んでください。</Typography>
      <RadioGroup
        defaultValue="seed"
        name="radio-buttons-group"
        value={privateKeyGenerateType}
        onChange={(e) => onChangeEvent(e.target.value)}
      >
        <FormControlLabel value="seed" control={<Radio />} label="シード" />
        <FormControlLabel
          value="mnemonic"
          control={<Radio />}
          label="ニーモニックコード"
        />
        <FormControlLabel
          value="generate"
          control={<Radio />}
          label="新規生成"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default SelectPrivateKeyType;
