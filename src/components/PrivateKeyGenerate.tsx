import React, { useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import * as HDWallet from "ethereum-hdwallet";

// mui
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// model
import { PrivateKeyType, handlePrivateKey } from "../models/PrivateKeyType";

type PrivateKeyGenerateProps = {
  handlePrivateKey: handlePrivateKey;
  privateKey: PrivateKeyType;
};
const PrivateKeyGenerate: React.FC<PrivateKeyGenerateProps> = (props) => {
  const { handlePrivateKey, privateKey } = props;
  const [didGenerate, setDidGenerate] = useState<boolean>(false);

  const hdwallet = (): PrivateKeyType => {
    const mnemonic = generateMnemonic();
    // const hdwallet = HDWallet.fromMnemonic(mnemonic);
    // console.log(hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey());
    // 秘密鍵を軸にコンポーネント間をやりとりさせるようりマスターシードを軸にした方がニーモニック、秘密鍵の導出が可能なため、やりやすい
    // genarateSeed 関数があればいいが、ないため、ニーモニックを生成して、シードを取り出す
    console.log(mnemonicToSeedSync(mnemonic));

    return "";
  };

  const onClickEvent = () => {
    setDidGenerate(true);
    hdwallet();
    // const generatedPrivateKey = generatePrivateKey();
    // handlePrivateKey(generatedPrivateKey);
  };

  return (
    <>
      <Button onClick={() => onClickEvent()} variant="outlined">
        新規生成
      </Button>

      {didGenerate ? (
        <>
          <Typography>シード</Typography>
          <Typography>{privateKey}</Typography>
          <Typography>ニーモニックコード</Typography>
          <Typography>{privateKey}</Typography>
        </>
      ) : null}
    </>
  );
};

export default PrivateKeyGenerate;
