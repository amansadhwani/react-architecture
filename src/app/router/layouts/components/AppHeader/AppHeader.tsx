import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "@/app/auth";
import { APP_ROUTES } from "@/app/config/routes";

export function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={Link}
          to={APP_ROUTES.DASHBOARD}
          variant="h6"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          React Architecture
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button component={Link} to={APP_ROUTES.DASHBOARD} color="inherit">
          Dashboard
        </Button>

        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
