export interface ITheme {
  colors: {
    primary: string;
    primaryBackground: string;
    primaryButton: string;
    primaryButtonText: string;
  };
}

export const lightTheme: ITheme = {
  colors: {
    primary: 'red',
    primaryBackground: 'white',
    primaryButton: 'black',
    primaryButtonText: 'white',
  },
};

export const darkTheme: ITheme = {
  colors: {
    primary: '#8cd6bd',
    primaryBackground: '#004761',
    primaryButton: 'white',
    primaryButtonText: 'black',
  },
};
