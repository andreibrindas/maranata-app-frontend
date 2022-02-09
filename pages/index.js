import { Container } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useAuth } from "../Auth";
import ResponsiveAppBar from "../components/Menu/ResponsiveAppBar";
import AddServiceForm from "../components/Services/AddServices/AddServiceForm";
import { MembersContextProvider } from "../ContextProviders/MembersContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { currentUser, isAdmin } = useAuth();

  return (
    <>
      <ResponsiveAppBar />

      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        {!isAdmin ? (
          "Nope"
        ) : (
          <MembersContextProvider>
            <AddServiceForm />
          </MembersContextProvider>
        )}
      </Container>
    </>
  );
}
