import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import { ThemeProvider } from "@mui/material";
import appTheme from "./utils/theme";
import { SnackbarProvider } from "notistack";

import MiniDrawer from "./layoutes/Sidebar";
import InboxPage from "./Inbox";
import StarredPage from "./Starred";

function App() {
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      preventDuplicate
    >
      <UserContextProvider>
        <ThemeProvider theme={appTheme}>
          <Routes>
    

            {/* Sidebar routes */}
            <Route path="/sidebar" element={<MiniDrawer />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/starred" element={<StarredPage />} />
          </Routes>
        </ThemeProvider>
      </UserContextProvider>
    </SnackbarProvider>
  );
}

export default App;
