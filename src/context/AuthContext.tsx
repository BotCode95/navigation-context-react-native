import React, {createContext, useReducer} from 'react';
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string,
    favoriteIcon?: string,
}

//state initial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

export interface AuthContextProps {
    authState : AuthState,
    signIn: () => void,
    logout: () => void,
    changeFavIcon: (iconName: string) => void,
    changeUserName: (userName: string) => void,
}


//create Context
export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({children} : any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavIcon = (iconName : string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUserName = (userName: string) => {
        dispatch({type: 'changeUserName', payload: userName})
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logout,
                changeFavIcon,
                changeUserName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
