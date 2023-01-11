import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [code, setCode] = useState<string>();

  const handleConfirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, code);

      navigate("/signin");
    } catch (error) {
      console.log("An error occurred: ", error.code);
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <form>
        <Card sx={{ padding: "16px", maxWidth: "400px" }}>
          <CardHeader title="Confirm Sign Up" />

          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="email"
            placeholder="Email Address"
            label="Email Address"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />

          <TextField
            sx={{ marginBottom: "16px" }}
            type="text"
            fullWidth
            name="code"
            placeholder="Code"
            label="Code"
            variant="outlined"
            onChange={(event) => setCode(event.target.value)}
          />

          <Button variant="contained" onClick={handleConfirmSignUp}>
            Confirm
          </Button>
        </Card>
      </form>
    </Box>
  );
};

export default ConfirmSignUp;
