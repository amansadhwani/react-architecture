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
import { Link } from "react-router-dom";

import { logout } from "@/app/auth";
import { APP_ROUTES } from "@/app/config/routes";
import { useAppTranslation, useLanguage } from "@/app/i18n";
import type { AppLanguage } from "@/app/i18n/config";
import { Can, Permission } from "@/auth";

export function AppHeader() {
  const { t } = useAppTranslation();
  const { language, changeLanguage } = useLanguage();

  const navigation = [
    {
      label: t("dashboard:title"),
      to: APP_ROUTES.DASHBOARD,
      permission: Permission.DashboardRead,
    },
    {
      label: t("users:title"),
      to: APP_ROUTES.USERS,
      permission: Permission.UsersRead,
    },
    {
      label: t("users:title"),
      to: APP_ROUTES.USERS2,
      permission: Permission.Users2Read,
    },
    {
      label: t("system:title"),
      to: APP_ROUTES.SYSTEM,
      permission: Permission.SystemRead,
    },
  ];

  const handleLogout = async () => {
    await logout();
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

        {navigation.map((item) => (
          <Can key={item.to} permission={item.permission}>
            <Button component={Link} to={item.to} color="inherit">
              {item.label}
            </Button>
          </Can>
        ))}

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
