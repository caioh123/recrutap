import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      analysis: string;
      hired: string;
      avaliable: string;
      urgent: string;
      noUrgent: string;
      normal: string;
      background: string;
      fill: string;
      title: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      link: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}