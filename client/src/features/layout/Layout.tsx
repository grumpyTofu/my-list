import React, { PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar open={open} handleOpenSidebar={handleOpenSidebar} />
      <Sidebar open={open} handleCloseSidebar={handleCloseSidebar} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
