import React, {useContext} from 'react';
import {LearnUserContext} from "../context/LearnUserContext";

const Footer = () => {


    const {isDark} = useContext(LearnUserContext)

    return(
        <footer
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color          : isDark ? 'white' : 'black',
            }}
        >
            <hr/>
            <p>footer</p>
        </footer>
    )
}

export default Footer