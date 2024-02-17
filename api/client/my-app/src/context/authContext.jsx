/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    // eslint-disable-next-line no-unused-vars
    const login = async ( inputs ) =>{
        console.log(inputs)
        const res = await axios.post("http://localhost:8000/api/auth/login", inputs)
        // const res = await axios.post("http://localhost:8000/api/auth/login", inputs)
        console.log(res.data)
        setCurrentUser(res.data);
    }

    const logout = async ( inputs ) =>{
        const res = await axios.post("http://localhost:8000/api/auth/logout");
        setCurrentUser(null);


    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser ))
    }, [currentUser] );

    return(
        <AuthContext.Provider value ={{currentUser , login, logout}}>
        {children}
        
        </AuthContext.Provider>
    ) 
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };



