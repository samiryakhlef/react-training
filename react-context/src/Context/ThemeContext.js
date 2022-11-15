import React, {createContext, useState} from "react";

//j'initialise le context avec le createContext()
export const ThemeContext = createContext();

const  ThemeContextProvider = props => {

    // je créer un state theme
    const [theme, setTheme] =useState(true)

    //je créer une fonction toggle
    const toggleTheme = () =>{
        setTheme(!theme)
    }

    //condition pour passer en dark mode
    if(theme){
        document.body.classList.add("dark-body");
    }else{
        document.body.classList.remove("dark-body");
    }

    // je return mon theme context
    return(

        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;

