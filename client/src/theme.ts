// src/themes.ts

export interface Theme {
  backgroundColor: string;
  sidebarBackgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  accentColor: string;
  secondaryAccentColor: string;
  successMessageColor: string;
  errorMessageColor: string;
  buttonHover: string;
  buttonDisabled: string;
  boxShadow: string;
  boxShadowGlow: string;
  fieldHover: string;
}

export const lightTheme: Theme = {
  backgroundColor: "#f8f9fa", // Soft white with a touch of gray for less strain
  sidebarBackgroundColor: "#eceff1", // Light cool gray for subtle contrast
  cardBackgroundColor: "#ffffff", // Clean, true white for cards
  textColor: "#2c3e50", // Dark navy-gray for better readability
  accentColor: "#1e88e5", // Modern blue with a vibrant but not overwhelming feel
  secondaryAccentColor: "#ff9800", // A warm, modern orange for contrast
  successMessageColor: "#2e7d32", // Slightly deeper green for good visibility
  errorMessageColor: "#d32f2f", // Stronger red, but not too harsh
  buttonHover: "#1565c0", // Deeper blue for clear hover effect
  buttonDisabled: "#b0bec5", // Muted grayish-blue for disabled buttons
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)", // Soft, modern shadow for depth
  boxShadowGlow: "0 0 12px rgba(30, 136, 229, 0.6)", // Subtle glowing effect for accents
  fieldHover: "rgba(0, 0, 0, 0.08)", // Gentle, modern hover effect
};

export const darkTheme: Theme = {
  backgroundColor: "#181818",
  sidebarBackgroundColor: "#232323",
  cardBackgroundColor: "#2b2b2b",
  textColor: "#e4e4e4",
  accentColor: "#4a90e2",
  secondaryAccentColor: "#f5275f",
  successMessageColor: "#4caf50",
  errorMessageColor: "#f44336",
  buttonHover: "#fc5884",
  buttonDisabled: "#8e8e8e",
  boxShadow: "4px 0 10px rgba(0, 0, 0, 0.6)",
  boxShadowGlow: "0 0 8px #4a90e2",
  fieldHover: "rgba(255, 255, 255, 0.1)",
};
