import * as React from "react";

// mui
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Container>
      <Typography m={2}>Wallet</Typography>
      <BasicCard />
    </Container>
  );
}

function BasicCard() {
  return (
    <>
      <Card>
        <CardContent>
          <Button variant="outlined">generate secret key</Button>
          <Typography m={2}>mnemonic</Typography>

          <TextField
            label="mnemonic"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </CardContent>
      </Card>

      <Typography m={2}></Typography>
      <Card>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="From" margin="normal" variant="outlined" />

            <TextField label="To" margin="normal" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Gas Price" margin="normal" variant="outlined" />

            <TextField label="Gas Limit" margin="normal" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Button variant="outlined">send</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
