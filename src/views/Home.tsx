import React, { useState } from "react";
import { generateMnemonic } from "bip39";
import * as HDWallet from "ethereum-hdwallet";
import Transaction from "ethereumjs-tx";
import Web3 from "web3";

// mui
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const web3 = new Web3(
  "https://ropsten.infura.io/v3/dc5b40653350479e8dcced05293d4ea1"
);

export default function Home() {
  const [mnemonic, setMnemonic] = useState(
    "census inch execute carry fine oblige bring task armed awkward mad dial"
  );
  const [priveteKey, setPriveteKey] = useState("");
  const [fromAddress, setFromAddress] = useState("");

  function DecideSecretKey() {
    const onClickGenerateSecretKeyEvent = () => {
      setMnemonic(generateMnemonic());

      const hdwallet = HDWallet.fromMnemonic(mnemonic);
      setFromAddress(
        `0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString("hex")}`
      );
      setPriveteKey(hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey());
    };

    const onClickSetPrivateKeyEvent = () => {
      const hdwallet = HDWallet.fromMnemonic(mnemonic);
      setFromAddress(
        `0x${hdwallet.derive(`m/44'/60'/0'/0/0`).getAddress().toString("hex")}`
      );
      setPriveteKey(hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey());
      console.log({
        PrivateKey: hdwallet.derive(`m/44'/60'/0'/0/0`).getPrivateKey(),
      });
    };

    return (
      <>
        <Card>
          <CardContent>
            <Button onClick={onClickGenerateSecretKeyEvent} variant="outlined">
              generate secret key
            </Button>
            <Typography m={2}>{mnemonic}</Typography>

            <Button onClick={onClickSetPrivateKeyEvent} variant="outlined">
              use exist secret key
            </Button>
            <TextField
              label="mnemonic"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </CardContent>
        </Card>
      </>
    );
  }

  function SendTransaction() {
    const [toAddress, setToAddress] = useState(
      "0x613e284AF884E482B8751fA02334250121591051"
    );

    // const nance = (async () => {
    //   await web3.eth.getTransactionCount(fromAddress);
    // })();
    const onClickEvent = () => {
      const amountValue = web3.utils.toWei(`${0.001}`, "ether");

      console.log({ toAddress });
      console.log({ fromAddress });
      console.log({ priveteKey: priveteKey });

      const txParams = {
        nonce: 1,
        gasPrice: web3.utils.toHex(21000000000),
        gasLimit: web3.utils.toHex(4712388),
        // gasLimit: web3.utils.toHex(100),
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toHex(parseInt(amountValue)),
      };

      const tx = new Transaction(txParams, {
        chain: "ropsten",
        hardfork: "petersburg",
      });
      tx.sign(priveteKey);
      const validateResult = tx.validate();
      console.log({ validateResult });

      if (validateResult) {
        const serializedRawTx = "0x" + tx.serialize().toString("hex");
        const txHash = tx.hash().toString("hex");
        console.log({ txHash });
        web3.eth
          .sendSignedTransaction(serializedRawTx)
          .then((receipt) => {
            console.log("Receipt:", receipt);
          })
          .catch((e) => {
            console.error("Error broadcasting the transaction: ", e);
          });
      } else {
        console.log("failed...");
      }
    };

    return (
      <>
        <Card>
          <CardContent>
            <TextField
              label="From"
              fullWidth
              margin="normal"
              variant="outlined"
              value={fromAddress}
            />
            <TextField
              label="To"
              fullWidth
              margin="normal"
              variant="outlined"
              value={toAddress}
              onChange={(e) => {
                setToAddress(e.target.value);
              }}
            />
            {/* <TextField
              label="Gas Price"
              fullWidth
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="Gas Limit"
              fullWidth
              margin="normal"
              variant="outlined"
            /> */}

            <Button onClick={onClickEvent} variant="outlined">
              send
            </Button>
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <Container>
      <Typography m={2}>Wallet</Typography>
      <DecideSecretKey />
      <Typography m={2}></Typography>
      <SendTransaction />
    </Container>
  );
}
