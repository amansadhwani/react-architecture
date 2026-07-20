import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppFooter, AppHeader } from "./components";

export function AppLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader />

      {/* Spacer for fixed AppBar */}
      <Toolbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>

      <AppFooter />
    </Box>
  );
}
