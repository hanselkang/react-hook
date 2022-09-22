import React, { useState} from "react";
import HookUseRef from "../components/useRef/HookUseRef";
import HookUseRef2 from "../components/useRef/HookUseRef2";
import HookUseContext from "../components/useRef/HookUseContext";
import Header from "../components/useRef/Header";
import Footer from "../components/useRef/Footer";

const HookContainer = () => {

    const main = (
        <div>
            <p> I am learning React</p>
        </div>
    )

    const [select, setSelect] = useState(main);

    const hookUseRefFirst = <HookUseRef/>
    const hookUseRefSecond = <HookUseRef2/>
    const hookUseContext = <HookUseContext/>


    const handleMenu = (event) => {
        if (event.target.id === '1') {
            setSelect(hookUseRefFirst)
        } else if (event.target.id === '2') {
            setSelect(hookUseRefSecond)
        } else if (event.target.id === '3') {
            setSelect(hookUseContext)
        } else {
            setSelect(main)
        }
    }

    return (
        <>
            <Header/>
            <h3>useRef</h3>
            <p onClick={handleMenu} id='1'>useRef example #1</p>
            <p onClick={handleMenu} id='2'>useRef example #2</p>
            <h3>useContext</h3>
            <p onClick={handleMenu} id='3'>useContext example #1</p>
            {select}
            <Footer/>
        </>
    )
}

export default HookContainer