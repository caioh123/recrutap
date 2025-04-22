export const theme = {
    colors: {
      primary: "#B72F2F", 
      secondary: "#1E1D1D", 
      tertiary: "#000000", 
      quaternary: "#FFFFFF", 
      footer: "#c62828",
  
      
      analysis: "#F0F1F7", 
      hired: "#FEC400", 
      avaliable: "#29CC97", 
      urgent: "#EB5757", 
      noUrgent: "#F2C94C", 
      normal: "#6FCF97", 
  
      background: "#FFFFFF", 
      fill: "#FFF0F0", 
  
      title: "#000000", 
      textPrimary: "#272833", 
      textSecondary: "#FFFFFF", 
      textTertiary: "#ABABAB", 

      backgroundGrey: "#F5F5F5",
  
     
      link: "#0053F0", 
    },
    spacing: {
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
    },
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
  };

  export const breakpoints = {
    sm: '320px',    // Smartphones pequenos
    md: '768px',    // Tablets/Smartphones grandes
    lg: '1024px',   // Desktops/Tablets landscape
    xl: '1200px'    // Desktops grandes
  };
  
  // Helper para media queries
  export const media = {
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`
  };