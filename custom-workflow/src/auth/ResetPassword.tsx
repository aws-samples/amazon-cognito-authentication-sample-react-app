import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();

  const handleResetPassword = async () => {
    try {
      const response = await Auth.forgotPassword(email);
      console.log(response);

      navigate("/confirm-reset-password");
    } catch (error) {
      console.log("An error occurred: ", error.code);
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <form>
        <Card sx={{ padding: "16px", maxWidth: "400px" }}>
          <CardHeader title="Reset Password" />

          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="email"
            placeholder="Email Address"
            label="Email Address"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />

          <Button variant="contained" onClick={handleResetPassword}>
            Reset Password
          </Button>
        </Card>
      </form>
    </Box>
  );
};

export default ResetPassword;
