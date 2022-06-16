import 'styled-components';

declare module 'styled-components' {
  export interface ThemeInterface {
    primaryColor: string;
    secondaryColor: string;
    primaryButtonColor: string;
    secondaryButtonColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
  }
}
