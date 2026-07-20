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

import { Can } from "@/access-control";
import { APP_ROUTES } from "@/app/config/routes";
import { useAppTranslation, useLanguage } from "@/app/i18n";
import type { AppLanguage } from "@/app/i18n/config";
import { useLogout } from "@/features/auth/hooks";

import { appNavigation } from "../../app.navigation";

export function AppHeader() {
  const { t } = useAppTranslation();
  const { language, changeLanguage } = useLanguage();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <AppBar position="fixed">
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

        {appNavigation.map((item) => (
          <Can
            key={item.to}
            {...(item.permission && { permission: item.permission })}
            {...(item.featureFlag && { featureFlag: item.featureFlag })}
          >
            <Button component={Link} to={item.to} color="inherit">
              {t(item.label)}
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
