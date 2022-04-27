import { createContext, useState } from "react";


export const SidebarAreaContext = createContext();

export const SidebarAreaProvider = ({children}) => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const toggleSidebarFalse = () => setOpenSidebar(!openSidebar);

    return (
        <SidebarAreaContext.Provider value={{openSidebar, toggleSidebarFalse}}>
            {children}
        </SidebarAreaContext.Provider>
    )
}