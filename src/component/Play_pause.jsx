import React, { useState, useEffect } from 'react';

const Play_pause = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let inter = null;
        if (isRunning) {
            inter = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        }

        return () => {
            if (inter) {
                clearInterval(inter);
            }
        };
    }, [isRunning]);

    function handlePlay() {
        setIsRunning(true);
    }

    function handlePause() {
        setIsRunning(false);
    }

    function handleStop() {
        setIsRunning(false);
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Play_pause;
