import React, { useState, useEffect } from "react";
import TimeArticle from "../components/timeArticle";
import '../css/roulette.css'
const RoulettePage = () => {

    const participants = ["A", "B", "C", "A"];
    const [itemStyles, setItemStyles] = useState([])
    const [lineStyles, setLineStyles] = useState([])
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [history, setHistory] = useState([])

    // 참가자를 각 섹션에 맞게 확장한 배열
    const expandedParticipants = [];
    participants.forEach(participant => {
        const count = participants.filter(p => p === participant).length;
        for (let i = 0; i < count; i++) {
            expandedParticipants.push(participant);
        }
    });

    function segment() {
        return 360 / participants.length;
    }

    function offset() {
        return segment() / 2
    }

    function angle() {
        // return -current * segment() // 정가운데
        let temp = -current * segment();
        let randomOffset = Math.floor(Math.random() * segment()) - offset() - 1;
        let cycle = count * 360 * 5; // 5바퀴
        return -(temp + randomOffset + cycle)
    }

    function rouletteStyle() {
        return { "transform": "rotate(" + angle() + "deg)" }
    }

    function currentItem(randomCurrent) {
        console.log("current :: " + randomCurrent)
        console.log("participants :: " +  participants[randomCurrent])
        return participants[randomCurrent]
    }

    function play() {
        setCount(count + 1)
        const randomCurrent = Math.floor(Math.random() * participants.length)
        setCurrent(randomCurrent)
        console.log("randomCurrent :: " + randomCurrent)
        setHistory(prevHistory => [...prevHistory, currentItem(randomCurrent)])
    }

    useEffect(() => {
        setItemStyles([])
        setLineStyles([])
        participants.map((participant, idx) => {
            const netItemStyles = { "transform": "rotate(" + segment() * idx + "deg)" }
            const newLineStyles = { "transform": "rotate(" + (segment() * idx + offset()) + "deg)" }
            setItemStyles(prevItemStyles => [...prevItemStyles, netItemStyles])
            setLineStyles(prevsetLineStyles => [...prevsetLineStyles, newLineStyles])
        })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col items-center">
            <header className="w-full bg-purple-500 py-4 shadow-md">
                <h1 className="text-center text-2xl font-bold text-white">🎉 25.01.05 3번째 룰렛</h1>
            </header>

            <main className="flex-grow w-full max-w-2xl px-6 mt-10">
                <section className="bg-white rounded-lg shadow-lg p-6 mb-6 flex justify-center items-center relative">
                    ⏱️ 참여까지 남은 시간
                    {/* <div> <TimeArticle /></div> */}
                </section>
                <section className="bg-white rounded-lg shadow-lg p-6 mb-6 flex justify-center items-center relative">
                    <div>
                        <div className="roulette-outer">
                            <div className="roulette-pin"></div>
                            <div className="roulette" style={rouletteStyle()}>
                                <div className="item-wrapper">
                                    {participants.map((participant, idx) => (
                                        <div className="item" style={itemStyles[idx]} key={idx}>{participant}
                                        </div>
                                    ))}
                                </div>

                                <div className="line-wrapper">
                                    {participants.map((participant, idx) => (
                                        <div className="line" style={lineStyles[idx]} key={idx}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 시작 버튼 */}
                <section className="text-center mb-6">
                    <button
                        onClick={() => play()}
                        className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600 transition"
                    >
                        룰렛 시작
                    </button>
                </section>

                {/* 당첨자 발표 */}
                {history && (
                    <section className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold text-purple-600">당첨자</h2>
                        <p className="mt-4 text-2xl font-semibold text-teal-500">{history[0]}님 축하합니다! 🎉</p>
                    </section>
                )}
            </main>

            <footer className="w-full bg-gray-200 py-4 text-center">
                <p className="text-gray-600 text-sm">© 2025 룰렛 서비스. 모두의 행운을 응원합니다!</p>
            </footer>
        </div>
    );
};

export default RoulettePage;
