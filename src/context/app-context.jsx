import { createContext, useState } from "react"

export const AppContext = createContext({});

function AppContextProvider({ children }) {

    const [userList, setUserList] = useState([{ email: 'swati@gmail.com', password: '1234', name: 'Swati Kharote' }]);

    const updateUserList = (user) => {
        setUserList([...userList, user]);
    }

    return (
        <AppContext.Provider value={{ userList, updateUserList }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;




