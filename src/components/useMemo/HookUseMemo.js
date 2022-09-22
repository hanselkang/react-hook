import React, {useMemo, useState} from 'react';


const HookUseMemo = () => {

    const simpleCalculate = (number) => {
        console.log('simple!')
        return number + 321
    };

    const hardCalculate = (number) => {
        console.log('hard!')
        for (let i = 0; i < 999999999; i++) {} // thinking time
        return number + 123
    }

    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    // const hardSum = hardCalculate(hardNumber);
    // hard calculation is not re-loaded but only when hardNumber is called
    const hardSum = useMemo(()=> {
        return hardCalculate(hardNumber)
    }, [hardNumber])
    const simpleSum = simpleCalculate(easyNumber);

    const handleHardChange = (event) => {
        setHardNumber(parseInt(event.target.value))
    };

    const handleSimpleChange = (event) => {
        setEasyNumber(parseInt(event.target.value))
    };

    return (
        <div>
            <p>number + 321</p>
            <input type="number" value={hardNumber} onChange={handleHardChange}/>
            <span> + 321 = {hardSum}</span>

            <p>number + 123</p>
            <input type="number" value={easyNumber} onChange={handleSimpleChange}/>
            <span> + 123 = {simpleSum}</span>
        </div>
    );
}

export default HookUseMemo;


// only when you want to keep it in memory