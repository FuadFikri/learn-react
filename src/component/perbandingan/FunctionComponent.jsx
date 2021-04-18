import React, { useEffect, useState } from 'react';

// performa lebih bagus function component
const FunctionCompeent = () => {
    const [counter, setCounter] = useState(0);


    // mounting pada function component
    useEffect(()=> {
        setCounter(100)
    },[])

    return <div>ini functio component

        <div>jumlah = {counter}</div>
        <button onClick={() => setCounter(prevState => prevState + 1)}>
            Tambah
        </button>
    </div>
}

export default FunctionCompeent;