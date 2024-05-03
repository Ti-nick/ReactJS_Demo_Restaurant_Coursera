import { useState } from "react"

export default function BookingForm(){
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [numberGuest, setNumberGuest] = useState("")
    const [occasion, setOccasion] = useState("")

    return (
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label for="res-date">Choose date</label>
                <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" id="res-date" />
                <label for="res-time">Choose time</label>
                <select value={time} onChange={(e)=> setTime(e.target.value)} id="res-time">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
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