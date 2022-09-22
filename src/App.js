import './App.css';
import HookContainer from "./container/HookContainer";
import {useState} from "react";
import {LearnUserContext} from "./context/LearnUserContext";

function App() {

    const [isDark, setIsDark] = useState(false);
    const user = "userName"

    return (
        <LearnUserContext.Provider value={{isDark, setIsDark, user}}>
        <div className="App">
            <HookContainer/>
        </div>
        </LearnUserContext.Provider>
    );
}

export default App;
