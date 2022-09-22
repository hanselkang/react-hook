import React, {useEffect, useMemo, useState} from 'react';


const HookUseMemoSecond = () => {

    const [number, setNumber] = useState(1);
    const [isTravel, setIsTravel] = useState(false);
    const [isWork, setIsWork] = useState(false);

    const work = useMemo(() => {
        return {
            work: isWork ? 'desk' : 'sofa'
        }
    }, [isWork])

    const location = isTravel ? 'somewhere' : 'home'
    // but if it's object?
    // const work = {
    //     work: isWork ? 'desk' : 'sofa'
    // }
    // call useEffect because it's Object not Primitive type -> not same


    const locationOne = {
        place: "Loch"
    }
    const locationTwo = {
        place: "Loch"
    }
    console.log(locationOne === locationTwo)
    // false because it saves in different memory address


    useEffect(() => {
        console.log("😮moving!")
    }, [location])

    useEffect(() => {
        console.log("😮busy!")
    }, [work])

    const handleChangeNumber = (event) => {
        setNumber(event.target.value)
    }
    const handleChangePlace = () => {
        setIsTravel(!isTravel)
    }
    const handleChangeWork = () => {
        setIsWork(!isWork)
    }

    return (
        <div>
            <h3> Exercise </h3>
            <input type="number" value={number} onChange={handleChangeNumber}/>
            <hr/>
            <h3> Where are you? </h3>
            <p>{location}</p>
            <button onClick={handleChangePlace}>Change my state</button>
            <h3> Where are you? </h3>
            <p>{work.work}</p>
            <button onClick={handleChangeWork}>Change my state</button>
        </div>
    );
}

export default HookUseMemoSecond;

