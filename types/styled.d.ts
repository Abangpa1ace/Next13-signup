import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: {
      primary: string;
      background: string;
      contrast: string;
    }
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    },
    action: {
      light: string;
      disabled: string;
    },
    '3billion': {
      'blue-light-900': string;
    },
    border: {
      dark: string;
      light: string;
      disabled: string;
    },
    error: {
      primary: string;
    }
  }
}