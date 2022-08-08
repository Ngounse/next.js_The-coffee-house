import Footer from "../Footer";
import Navbar from "../NavBar";
import styles from "../../styles/Home.module.css";
import { Stack, Container } from "@mui/material";
import styled from "styled-components";

const Layout = ({ children }: any) => {
  return (
    <Stack sx={{ flex: 1 }}>
      <Navbar />
      <Stack sx={{ flex: 1 }}>{children}</Stack>
      <Footer />
    </Stack>
  );
};

const StyledContainer = styled.div`
  display: flex;
`;

export default Layout;
