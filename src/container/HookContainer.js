import React, {useState} from "react";
import HookUseRef from "../components/useRef/HookUseRef";
import HookUseRef2 from "../components/useRef/HookUseRef2";

const HookContainer = () => {

    const main = (
        <div>
            <p> I am learning React</p>
        </div>
    )

    const [select, setSelect] = useState(main)

    const hookUseRefFirst = <HookUseRef/>
    const hookUseRefSecond = <HookUseRef2/>



    const handleMenu = (event) => {
        if (event.target.id === '1') {
            setSelect(hookUseRefFirst)
        } else if (event.target.id === '2') {
            setSelect(hookUseRefSecond)
        } else {
            setSelect(main)
        }
    }

    return (
        <>
            <p onClick={handleMenu} id='1'>useRef example #1</p>
            <p onClick={handleMenu} id='2'>useRef example #2</p>
            {select}
        </>
    )
}

export default HookContainer