import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Typography, Button, useTheme } from "@mui/material";

export const TestComponent = () => {
  const theme = useTheme(); // Берем тему через хук

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Привет, Material UI!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Это тестовый компонент с использованием темы.
      </Typography>
      <Button variant="contained" color="primary">
        Нажми меня
      </Button>
    </Box>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <TestComponent />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
