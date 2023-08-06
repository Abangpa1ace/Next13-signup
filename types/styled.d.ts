import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: {
      primary: string;
      background: string;
    }
    text: {
      primary: string;
      secondary: string;
    }
  }
}