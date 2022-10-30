import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

// TODO what's happening?
export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState (true)
    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu}}>
            {children}
        </StateContext.Provider>
    )
}

// for other page to use the state
export const useStateContext = () => useContext(StateContext)
