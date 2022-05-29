import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// mui
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// model
import { PrivateKeyGenerateType } from "../models/PrivateKeyGenerateType";
import { PrivateKeyType, handlePrivateKey } from "../models/PrivateKeyType";

// components
import SelectPrivateKeyType from "../components/SelectPrivateKeyType";
import PrivateKeyInputTextField from "../components/PrivateKeyInputTextField";
import PrivateKeyGenerate from "../components/PrivateKeyGenerate";

type PrivateKeyProps = {
  handlePrivateKey: handlePrivateKey;
  privateKey: PrivateKeyType;
};

const PrivateKey: React.FC<PrivateKeyProps> = (props) => {
  const { handlePrivateKey, privateKey } = props;

  const [privateKeyGenerateType, setPrivateKeyGenerateType] =
    useState<PrivateKeyGenerateType>("seed");

  const navigate = useNavigate();

  const handlePrivateKeyGenerateType = (value: PrivateKeyGenerateType) => {
    setPrivateKeyGenerateType(value);
  };

  const onClickEvent = () => {
    navigate("/transactions");
  };

  return (
    <>
      <Typography>秘密鍵を入力してください</Typography>
      <SelectPrivateKeyType
        privateKeyGenerateType={privateKeyGenerateType}
        handlePrivateKeyGenerateType={handlePrivateKeyGenerateType}
      />

      <div>
        {privateKeyGenerateType === "seed" ? (
          <PrivateKeyInputTextField handlePrivateKey={handlePrivateKey} />
        ) : null}

        {privateKeyGenerateType === "mnemonic" ? (
          <PrivateKeyInputTextField handlePrivateKey={handlePrivateKey} />
        ) : null}

        {privateKeyGenerateType === "generate" ? (
          <PrivateKeyGenerate
            handlePrivateKey={handlePrivateKey}
            privateKey={privateKey}
          />
        ) : null}
      </div>

      <div>
        <Button onClick={onClickEvent} variant="outlined">
          次へ
        </Button>
      </div>
    </>
  );
};

export default PrivateKey;
