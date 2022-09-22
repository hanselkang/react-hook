import React, {useState, useRef} from 'react';

const HookUseRef = () => {

    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    const increaseCountState = () => {
        setCount(count + 1)
    }
    console.log('🐷useState count : ', count)

    const increaseCountRef = () => {
        countRef.current = countRef.current +1;
        console.log('🐻inside of countRef : ', countRef.current)
    }
        console.log('😒outside of countRef : ', countRef.current)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCountState}> Up</button>
            <p>CountRef: {countRef.current}</p>
            <button onClick={increaseCountRef}> Up</button>
        </div>
    )
}

export default HookUseRef