import { Button, Grid, Stack, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login({ type, color }) {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Stack
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h2">Programare Maranata</Typography>
      <Typography variant="p">
        Vă rugăm să vă înregistrați cu contul vostru de Google
      </Typography>
      <Button
        style={{ marginTop: "40px" }}
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={loginWithGoogle}
      >
        Conectează-te cu Google
      </Button>
    </Stack>
  );
}

export default Login;
