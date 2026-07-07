import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "@/app/auth";
import { APP_ROUTES } from "@/app/config/routes";
import { useAppTranslation, useLanguage } from "@/app/i18n";
import type { AppLanguage } from "@/app/i18n/config";

export function AppHeader() {
  const navigate = useNavigate();
  const { t } = useAppTranslation();
  const { language, changeLanguage } = useLanguage();

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
          {t("dashboard:title")}
        </Button>

        <Button component={Link} to={APP_ROUTES.USERS} color="inherit">
          {t("users:title")}
        </Button>

        <FormControl
          size="small"
          sx={{
            minWidth: 120,
            mx: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        >
          <Select
            value={language}
            onChange={(event) =>
              changeLanguage(event.target.value as AppLanguage)
            }
            sx={{
              color: "white",
              "& .MuiSelect-select": {
                py: 0.75,
              },
            }}
          >
            <MenuItem value="en">🇨🇦 English</MenuItem>
            <MenuItem value="fr">🇫🇷 Français</MenuItem>
          </Select>
        </FormControl>

        <Button color="inherit" onClick={handleLogout}>
          {t("common:logout")}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
