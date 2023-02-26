import { createContext, useState } from "react"

export const AppContext = createContext({});


function AppContextProvider({ children }) {

    const [userList, setUserList] = useState([{ email: 'swati@gmail.com', password: '1234', name: 'Swati Kharote' }]);

    const [products, setProducts] = useState([]);

    const [loginUser, setLoginUser] = useState("");

    const updateUserList = (user) => {
        setUserList([...userList, user]);
    }

    const updateLoginUser = (user) => {
        setLoginUser(user)
    }

    const storeProducts = (prod) => {
        setProducts(prod);
    }

    return (
        <AppContext.Provider value={{ userList, updateUserList, storeProducts, products, loginUser, updateLoginUser }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;




