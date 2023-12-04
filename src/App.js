import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ColorContext } from "./ColorContext";
import Login from "./Login";
import { UserContext } from "./UserContext";

const App = () => {
    const [color, setcolor] = useState("red");
    const [userName, setuserName] = useState("")
    return (
        <div>
            <h1 style={{ color: color }}> Samp</h1>

            <ColorContext.Provider value={{ color, setcolor }}>
                <UserContext.Provider value={{ userName, setuserName }}>
                    <Login></Login>
                    <Outlet></Outlet>
                </UserContext.Provider>
            </ColorContext.Provider>
        </div>
    );
};

export default App;
