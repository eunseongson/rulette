import { useEffect, useState } from "react";
import useCountDownTimer from "../hooks/useCountDownTimer";

export default function TimeArticle() {
    const [data, setData] = useState('')
    const targetTime = '2025-01-05 17:30:10';
    const { remainingTime } = useCountDownTimer(targetTime);
    return (
        <div>
            {remainingTime > 0 ? <p>00</p> : <p>{remainingTime}</p>}
        </div>
    );
}