import React, {useContext} from 'react';
import {LearnUserContext} from "../../context/LearnUserContext";

const HookUseContextGrandChild = () => {
    const {isDark, user} = useContext(LearnUserContext)
    return (
        <div className="child"
             style={{
                 backgroundColor: isDark ? 'black' : 'white',
                 color          : isDark ? 'white' : 'black',
             }}>
            <p>Hello {user} it's useContext</p>
        </div>
    )
}

export default HookUseContextGrandChild