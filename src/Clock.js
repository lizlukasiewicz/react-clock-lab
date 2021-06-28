import { useState, useEffect } from "react"

export default function Clock() {
   const [second, setSecond] = useState(0)
   const [minute, setMinute] = useState(0)
   const [hour, setHour] = useState(0)
    const [intervalHolder, setIntervalHolder] = useState(null)

   const toDegrees = (increment, step) => {
    return (increment / step) * 360
}

    const clockRun = (secondHand, minuteHand, hourHand) => {
        setSecond(second + 1)
        const secDegrees = toDegrees(second, 60)
        secondHand.style.transform = `rotate(${secDegrees}deg)`
        if((second % 60) === 0) {
            setMinute(minute + 1)
            const minDegrees = toDegrees(minute, 60)
            minuteHand.style.transform = `rotate(${minDegrees}deg)`
        }
        if((second % 3600) === 0) {
            setHour(hour + 1)
            const hourDegrees = toDegrees(hour, 12)
            hourHand.style.transform = `rotate(${hourDegrees}deg)`
        }
    }
    const stopTimer = () => {
        clearInterval(intervalHolder)
    }

    useEffect(() => {
        const secondHand = document.getElementById("second")
        const minuteHand = document.getElementById("minute")
        const hourHand = document.getElementById("hour")

        let intervalRun = setInterval(() => {

        }, 1000)
        setIntervalHolder(intervalRun)
        return clearInterval(intervalHolder)


    }, [second])

    return (
        <div className="clock">
            <p>{hour}{minute}{second}</p>
    <img id="clock" src="img/clockface.png"/>
      <img id="hour" src="img/hour-hand.png"/>
      <img id="minute" src="img/minute-hand.png"/>
      <img id="second" src="img/second-hand.png"/>
        </div>
    )
}