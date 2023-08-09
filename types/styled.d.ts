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
    },
    action: {
      light: string;
    },
    '3billion': {
      'blue-light-900': string;
    }
  }
}