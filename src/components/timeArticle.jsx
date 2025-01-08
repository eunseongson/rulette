import { useEffect, useState } from "react";
import useCountDownTimer from "../hooks/useCountDownTimer";

export default function TimeArticle(props) {
    const targetTime = '2025-01-08 17:30:10';
    const { remainingTime } = useCountDownTimer(targetTime);
    if (remainingTime === "TIME OUT") {
        props.handleIsTimeRemaining()
    }
    return (
        <div>
            {remainingTime > 0 ? <p>00</p> : <p>{remainingTime}</p>}
        </div>
    );
}