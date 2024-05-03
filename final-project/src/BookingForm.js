import { useState } from "react"
import { useReducer } from 'react';

function updateTimes(state, action){
  if (action.type === "selected_date") return ["17:00","18:00","20:00","21:00","22:00"]
  return state;
}

export default function BookingForm(){
    const initializeTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [numberGuest, setNumberGuest] = useState("")
    const [occasion, setOccasion] = useState("")

    function dateChange(e){
        const selectedDate = e.target.value
        setDate(selectedDate)
        dispatch({type: "selected_date", date: selectedDate})
    }

    return (
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label for="res-date">Choose date</label>
                <input value={date} onChange={dateChange} type="date" id="res-date" />
                <label for="res-time">Choose time</label>
                <select value={time} onChange={(e)=> setTime(e.target.value)} id="res-time">
                    {state.map(function(i){return <option key={i} value={i}>{i}</option>})}
                </select>
                <label for="guests">Number of guests</label>
                <input value={numberGuest} onChange={(e)=> setNumberGuest(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests"/>
                <label for="occasion">Occasion</label>
                <select value={occasion} onChange={(e)=> setOccasion(e.target.value)} id="occasion">
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your Reservation" />
            </form>
    )
}