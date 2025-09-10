import { createContext, useContext, useEffect, useState } from "react";
import { Models ,ID} from "react-native-appwrite";
import { account } from "./appwrite"
import React from "react";


type AuthContextType = {
    user: Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>;
    isLoadingUser: boolean;
    signIn: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
    
}

const AuthContext =createContext<AuthContextType |undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [isLoadingUser, setISloadingUser] = useState<boolean>(true);
    useEffect(() => {
        getUser();
    }, []);
    const getUser = async () => {
        try {
            const session = await account.get()
            setUser(session)
        
        } catch (error) {
            setUser(null)    
        } finally {
            setISloadingUser(false)
        }
    }

    const signUp = async (email: string, password: string) => {
        try {
            await account.create(ID.unique(), email, password);
            await signIn(email, password);
            return null
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
            return "An error occured during Sign UP"
        }
    };

    const signOut = async () => {
        try {
            await account.deleteSession("current");
        setUser(null);
        } catch (error) {
            console.log(error);
        }
        
    };;
    const signIn = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const session = await account.get()
            setUser(session)
            return null
        } catch (error) {
            if (error instanceof Error) {
                return error.message
            }
            return "An error occured during Sign In"
        }
    };
    
    return (
        <AuthContext.Provider value={ { user,isLoadingUser,signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
    
}
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be inside of the AuthProvider")
    }
    return context;
}