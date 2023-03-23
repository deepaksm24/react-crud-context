import { Children, createContext, useContext, useState } from "react";
import BaseApp from "./components/base";
import { Studentdetail } from "./components/studentdetail";
import { Student1 } from "./components/TeacherDetails";
import Teachers from "./teachers";

export const UserContext = createContext();
export const User2Context = createContext();


export default function AppProvider({ children }) {

    const [user, setUser] = useState(Student1);

    const[student,setStudent] = useState(Studentdetail);
 

    // const reducerstate = user;   //teacher details in student1
    // const reducer = (state, action) => {

    //     switch (action.type) {
    //         case "edit":
    //             return console.log("add button press");
    //         case "delete":
    //             {
    //                 const alterList = Student1.filter((per)=>per.id !== action.teacherid);
                    
    //                setUser(alterList);
    //                return user
                   
    //             }
    //         default: return state;
    //     }
    // }
    // const [state, dispatch] = useReducer(reducer, reducerstate);





    return (

        <UserContext.Provider
            value={[user, setUser, student, setStudent]}>
            {children}

        </UserContext.Provider>

    );
}

