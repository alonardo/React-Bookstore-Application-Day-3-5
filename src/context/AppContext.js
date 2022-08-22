import {createContext, useState} from "react"

export const AppContext = createContext();

const AppContextProvider = ({children})=>{
    const getUserFromLS=()=>{
        let u=localStorage.getItem('user-bookstore')
        if (u){
            return JSON.parse(u)
        }
    }

    const [alert, setAlert] =useState({})
    const [user, _setUser] =useState(getUserFromLS()??'')
    const [book, setBook] = useState('')

    const setUser=(user)=>{
        localStorage.setItem('user-bookstore', JSON.stringify(user))
        _setUser(user)
    }
    
    const values={
        alert,
        setAlert,
        user,
        setUser,
        book,
        setBook
        
        // Need to add funcitonality to add to reading list here!
    }
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider