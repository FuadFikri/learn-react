import React, { useEffect, useRef, useState } from 'react';

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

    const videoRef = useRef()
    
    return <div>ini functio component

        <div>jumlah = {counter}</div>
        <button onClick={() => setCounter(prevState => prevState + 10)}>
            Tambah
        </button>
        <br />

        <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" />
        <button onClick={() => videoRef.current.play()}>play</button>
        <button onClick={() => videoRef.current.pause()}>stop</button>
    </div>
}

export default FunctionCompeent;