import React from 'react';

export const themes = {
    light: {
        background: "#e4f0f5",
        button: "#004862",
        btnText: "white",
        valueText: "#004862"
    },
    dark: {
        background: "#004862",
        button: "white",
        btnText: "black",
        valueText: "#8DD7BD"
    },
};


const MyContext = React.createContext({
    themeColor: themes.dark,
    toggleTheme: () => { },
});

export default MyContext
