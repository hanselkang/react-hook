import React, {useContext} from 'react';
import {LearnUserContext} from "../../context/LearnUserContext";

const Header = () => {

    const {isDark, setIsDark} = useContext(LearnUserContext)

    const toggleMode = () => {
        setIsDark(!isDark)
    }

    return (
        <header
        className="header"
        style={{
            backgroundColor: isDark ? 'black' : 'white',
            color          : isDark ? 'white' : 'black',
        }}>

            <p>header</p>
            <button className="button" onClick={toggleMode}>Dark Mode</button>
            <hr/>
        </header>
    )
}

export default Header