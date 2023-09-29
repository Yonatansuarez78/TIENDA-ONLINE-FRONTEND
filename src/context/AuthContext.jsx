import {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}