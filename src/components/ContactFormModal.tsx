"use client";

import {
  Dialog,
  DialogContent,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";
import { ContractForm } from "./ContractForm";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactFormModal = ({ open, onClose }: ContactFormModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile Bottom Sheet
  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: "1.25rem",
            borderTopRightRadius: "1.25rem",
            maxHeight: "90dvh",
            height: "auto",
            px: "1rem",
            py: "0.75rem",
            pb: "max(env(safe-area-inset-bottom), 0.75rem)",
            backgroundColor: "white",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Drag Handle */}
          <Box
            sx={{
              width: "5rem",
              height: "0.25rem",
              backgroundColor: "grey.200",
              borderRadius: "0.125rem",
              margin: "0.25rem auto 0.75rem",
              flexShrink: 0,
            }}
          />

          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ContractForm onClose={onClose} />
          </Box>
        </Box>
      </Drawer>
    );
  }

  // Desktop Dialog
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: "41.5rem",
          maxWidth: "90vw",
          borderRadius: "0.5rem",
          p: "1.5rem 2rem",
          overflow: "visible",
          position: "relative",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: "0",
          top: "-2rem",
          color: "white",
          backgroundColor: "transparent",
          p: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M18 18L6 6"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>

      <DialogContent sx={{ p: 0 }}>
        <ContractForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
