import React, {useEffect, useRef} from 'react';

const HookUseRef2 = () => {
    const inputRef = useRef();

    useEffect(() => {
        console.log("useEffect: It always calls me twice")
        inputRef.current.focus();
    }, [])

    const welcomeMessage = () => {
        alert(`Welcome! ${inputRef.current.value}!`);
    }


    return (
        <>
            <input ref={inputRef} type="text" placeholder="username"/>
            <button onClick={welcomeMessage}>Login</button>
        </>
    )
}

export default HookUseRef2