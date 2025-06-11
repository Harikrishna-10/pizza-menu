import React, { useEffect } from 'react';
import { useState } from "react";

const DateCounter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const [daye, setDaye] = useState("Today is");

    const date = new Date();
    date.setDate(date.getDate() + count);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const year = date.getFullYear();
    const day = date.getDate();
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    // console.log(year, day, dayName, monthName);
    function handlePrevious() {
        if (step > 1)
            setStep(s => s - 1);
    }

    function handleNext() {
        setStep(s => s + 1);

    }
    function handleCountPrevious() {
        setCount(step === 1 ? count - 1 : count - step);
    }
    function handleCountNext() {
        setCount(step === 1 ? count + 1 : count + step);
    }
    useEffect(() => {
    if (count === 0) {
      setDaye("Today is");
    } else if (count > 0) {
      setDaye(`${count} days from today is`);
    } else {
      setDaye(`${Math.abs(count)} days ago was`);
    }
  }, [count]);

    return (
        <>
            <div>
                <button onClick={handlePrevious}>-</button>
                <p>Step: {step}</p>
                <button onClick={handleNext}>+</button>
            </div>
            <div>
                <button onClick={handleCountPrevious}>-</button>
                <p>Count: {count}</p>
                <button onClick={handleCountNext}>+</button>
            </div>
            <div>
                {`${daye} ${dayName} ${monthName} ${day} ${year}`}
            </div>
        </>
    )

};
export default DateCounter;
