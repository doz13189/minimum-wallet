import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// views
import PrivateKey from "./views/PrivateKey";
import Transactions from "./views/Transactions";

// mui
import Container from "@mui/material/Container";

// model
import { PrivateKeyType } from "./models/PrivateKeyType";

// css
import "./App.css";

const App: React.FC = () => {
  const [privateKey, setPrivateKey] = useState<PrivateKeyType>("");
  const handlePrivateKey = (value: PrivateKeyType) => {
    setPrivateKey(value);
  };

  return (
    <Container>
      <h1>minimum wallet</h1>
      <Routes>
        <Route
          path="/privateKey"
          element={
            <PrivateKey
              handlePrivateKey={handlePrivateKey}
              privateKey={privateKey}
            />
          }
        />
        <Route
          path="/transactions"
          element={<Transactions privateKey={privateKey} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
