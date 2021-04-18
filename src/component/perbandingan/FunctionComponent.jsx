import React, { useEffect, useState } from 'react';

// performa lebih bagus function component
const FunctionCompeent = () => {
    const [counter, setCounter] = useState(0);


    // mounting pada function component
    useEffect(()=> {
        setCounter(50)
        return()=> {
            document.title="unmounting"
        }
    },[])

    useEffect(()=> {
        if(counter ===100) {
            alert("nilai terpenuhi")
            setCounter(0)
        }
        
    },[counter])

    return <div>ini functio component

        <div>jumlah = {counter}</div>
        <button onClick={() => setCounter(prevState => prevState + 10)}>
            Tambah
        </button>
    </div>
}

export default FunctionCompeent;