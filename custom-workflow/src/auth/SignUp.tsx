import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [name, setFirstName] = useState<string>();
  const [family_name, setLastName] = useState<string>();
  const [confirm_password, setConfirmPassword] = useState<string>();
  const [error, setError] = useState<any>();

  const handleSubmit = async () => {
    try {
      if (password !== confirm_password) {
        setError("Passwords must match.");
        return;
      }
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          family_name,
          email,
        },
      });

      console.log(user);
      navigate("/confirm-signup");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <form>
        <Card sx={{ padding: "16px", maxWidth: "400px" }}>
          <CardHeader title="Sign Up" />

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
            sx={{ marginBottom: "16px", marginRight: "12px" }}
            fullWidth
            name="name"
            placeholder="First Name"
            label="First Name"
            variant="outlined"
            onChange={(event) => setFirstName(event.target.value)}
          />

          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="family_name"
            placeholder="Last Name"
            label="Last Name"
            variant="outlined"
            onChange={(event) => setLastName(event.target.value)}
          />

          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            sx={{ marginBottom: "16px" }}
            fullWidth
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            label="Confirm Password"
            variant="outlined"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          {error && (
            <Box sx={{ mb: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}

          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Card>
      </form>
    </Box>
  );
};

export default SignUp;
