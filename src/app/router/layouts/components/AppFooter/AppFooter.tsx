import { Box, Typography } from "@mui/material";

export function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} React Architecture Demo
      </Typography>
    </Box>
  );
}
