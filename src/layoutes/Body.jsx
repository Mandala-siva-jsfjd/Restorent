import React from "react";
import { Box, Toolbar } from "@mui/material";
import DrawerAppBar from "./DrawerAppBar";
import Footer from "../layoutes/pages/Footer";
import { useUserContext } from "./pages/UserContextProvider";

const Body = ({ children }) => {
  const { footerHeight } = useUserContext();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DrawerAppBar />
        <Box
          component="main"
          sx={{
            p: 2,
            width: "100%",
            bgcolor: "#e2e3ea",
            minHeight: `calc(100vh - 32px - ${footerHeight}px)`,
            mb: `${footerHeight}px`,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
  <Footer />
    </>
  );
};

export default Body;
