import React, { useState } from "react";

// mui
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// model
import { PrivateKeyGenerateType } from "../models/PrivateKeyGenerateType";
import { PrivateKeyType, handlePrivateKey } from "../models/PrivateKeyType";

// components
import SelectPrivateKeyType from "../components/SelectPrivateKeyType";
import PrivateKeyInputTextField from "../components/PrivateKeyInputTextField";

type PrivateKeyProps = {
  handlePrivateKey: handlePrivateKey;
  privateKey: PrivateKeyType;
};

const PrivateKey: React.FC<PrivateKeyProps> = (props) => {
  const { handlePrivateKey, privateKey } = props;

  const [privateKeyGenerateType, setPrivateKeyGenerateType] =
    useState<PrivateKeyGenerateType>("seed");

  const handlePrivateKeyGenerateType = (value: PrivateKeyGenerateType) => {
    setPrivateKeyGenerateType(value);
  };
  const onClickEvent = () => {
    console.log("move to /transactions");
  };
  return (
    <>
      <Typography>秘密鍵を入力してください</Typography>
      <SelectPrivateKeyType
        privateKeyGenerateType={privateKeyGenerateType}
        handlePrivateKeyGenerateType={handlePrivateKeyGenerateType}
      />
      <PrivateKeyInputTextField handlePrivateKey={handlePrivateKey} />
      <PrivateKeyGenerateField
        handlePrivateKey={handlePrivateKey}
        privateKey={privateKey}
      />
      <Button onClick={onClickEvent} variant="outlined">
        次へ
      </Button>
    </>
  );
};

const PrivateKeyGenerateField: React.FC<PrivateKeyProps> = (props) => {
  const { handlePrivateKey, privateKey } = props;
  return (
    <>
      <Button onClick={() => handlePrivateKey("sample key")} variant="outlined">
        新規生成
      </Button>

      <Typography>シード</Typography>
      <Typography>{privateKey}</Typography>
      <Typography>ニーモニックコード</Typography>
      <Typography>{privateKey}</Typography>
    </>
  );
};

export default PrivateKey;
