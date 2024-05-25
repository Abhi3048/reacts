import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    // console.log(children)
    const [user,setUser]= React.useState(null);
    // console.log(user)
    // console.log(setUser)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider