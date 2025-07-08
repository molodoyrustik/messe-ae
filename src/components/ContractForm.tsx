"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validationPhone(phone: string) {
  // Простая валидация телефона
  return /^\+\d+$/.test(phone);
}

export const ContractForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    communications: false,
    personalData: false,
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    communications?: string;
    personalData?: string;
  }>({});

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleCheckboxChange =
    (field: keyof typeof checkboxes) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxes({
        ...checkboxes,
        [field]: event.target.checked,
      });
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validationPhone(formData.phone)) {
      newErrors.phone = "Invalid phone";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!checkboxes.personalData) {
      newErrors.personalData =
        "You must agree to allow messe to store and process your personal data.";
    }

    // if (!checkboxes.communications) {
    //   newErrors.communications =
    //     "You must agree to receive other communications from messe.";
    // }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const hutk =
      typeof document !== "undefined"
        ? document.cookie
            .split("; ")
            .find((row) => row.startsWith("hubspotutk="))
            ?.split("=")[1]
        : undefined;

    const payload = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: formData.email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: formData.name,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: formData.phone,
        },
      ],
      legalConsentOptions: {
        consent: {
          consentToProcess: checkboxes.personalData,
          text: "I agree to allow messe to store and process my personal data.",
          communications: [
            {
              value: checkboxes.communications,
              subscriptionTypeId: 999,
              text: "I agree to receive other communications from messe.",
            },
          ],
        },
      },
      context: {
        hutk: hutk,
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
    };

    const formId = "b35e0e92-9eb1-4db7-9ed0-4d7a2ea3f582";
    const portalId = "27038193";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      setIsLoading(true);
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      setIsLoading(false);
      setSnackbar({
        open: true,
        message:
          "Thank you for your request, we will contact you in 24 hours at the latest. ",
        severity: "success",
      });

      setFormData({ name: "", phone: "", email: "" });
      setCheckboxes({ communications: false, personalData: false });

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch {
      setIsLoading(false);
      setSnackbar({
        open: true,
        message: "Error sending form. Please try again later.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        suppressHydrationWarning={true}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1.25rem", md: "1.25rem" },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "grey.800",
            fontSize: { xs: "0.875rem", md: "1rem" },
            lineHeight: { xs: "1rem", md: "1.5rem" },
            letterSpacing: "tight",
          }}
        >
          Have a project to discuss? Fill the form below and our experts will
          contact you within 24 hours.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <TextField
            fullWidth
            placeholder="Name"
            value={formData.name}
            onChange={handleChange("name")}
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: { xs: "2.5rem", md: "auto" },
                borderRadius: "0.25rem",
                "& fieldset": {
                  borderColor: "grey.300",
                },
              },
              "& .MuiInputBase-input": {
                px: "0.75rem",
                py: { xs: "0.5rem", md: "0.5rem" },
                fontSize: "1rem",
                color: "grey.500",
                "&::placeholder": {
                  color: "grey.500",
                  opacity: 1,
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange("phone")}
            variant="outlined"
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: { xs: "2.5rem", md: "auto" },
                borderRadius: "0.25rem",
                "& fieldset": {
                  borderColor: "grey.300",
                },
              },
              "& .MuiInputBase-input": {
                px: "0.75rem",
                py: { xs: "0.5rem", md: "0.5rem" },
                fontSize: "1rem",
                color: "grey.500",
                "&::placeholder": {
                  color: "grey.500",
                  opacity: 1,
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: { xs: "2.5rem", md: "auto" },
                borderRadius: "0.25rem",
                "& fieldset": {
                  borderColor: "grey.300",
                },
              },
              "& .MuiInputBase-input": {
                px: "0.75rem",
                py: { xs: "0.5rem", md: "0.5rem" },
                fontSize: "1rem",
                color: "grey.500",
                "&::placeholder": {
                  color: "grey.500",
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        <FormGroup sx={{ mt: 1, mb: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.communications}
                onChange={handleCheckboxChange("communications")}
                color="primary"
                disableRipple={true}
              />
            }
            label="I agree to receive other communications from messe."
          />
          {errors.communications && (
            <Typography variant="caption" color="error" sx={{ ml: 4, mt: -1 }}>
              {errors.communications}
            </Typography>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.personalData}
                onChange={handleCheckboxChange("personalData")}
                color="primary"
                disableRipple={true}
              />
            }
            label="I agree to allow messe to store and process my personal data."
          />
          {errors.personalData && (
            <Typography variant="caption" color="error" sx={{ ml: 4, mt: -1 }}>
              {errors.personalData}
            </Typography>
          )}
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
          endIcon={isLoading ? <CircularProgress size={20} /> : null}
          sx={{
            height: { xs: "auto", md: "3rem" },
            fontSize: { xs: "1rem", md: "1.5rem" },
            lineHeight: { xs: "1.5rem", md: "1.75rem" },
            textTransform: "none",
            fontWeight: 400,
            borderRadius: "0.5rem",
            backgroundColor: "#656CAF",
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            mb: { xs: "0.75rem", md: 0 },
            // Force exact padding values
            padding: { xs: "0.375rem 1rem !important", md: "0.5rem 1.25rem" },
            "&:hover": {
              backgroundColor: "#4C53A2",
            },
          }}
        >
          Send
        </Button>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
