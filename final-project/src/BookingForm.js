import { useState } from "react";
import { useReducer } from 'react';
import { useEffect } from 'react';
import { fetchAPI } from "./mockAPI";
import { submitAPI } from "./mockAPI";
import { Route, useNavigate } from "react-router-dom";

export function initializeTimes() {
    return ["17:00","18:00","19:00","20:00","21:00","22:00"];
}

export function updateTimes(state, action){
  if (action.toSelectADate === "selected_date") return action.avaliableTime
  return state;
}

export default function BookingForm(){
    const [state, dispatch] = useReducer(updateTimes, initializeTimes())
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [numberGuest, setNumberGuest] = useState("")
    const [occasion, setOccasion] = useState("Ordinary Dinner")
    const navigate = useNavigate()

    useEffect(()=>{
       if(date){fetchAPI(date).then(result => {
            dispatch({toSelectADate:"selected_date", avaliableTime: result});
            setTime(result[0]);
        });}
    }, [date] )

    function submitForm(formData){
        submitAPI(formData)
    }

    function dateChange(e){
        const selectedDate = e.target.value
        setDate(selectedDate)
    }

    const clearForm = () => {
        setDate("")
        setTime("")
        setNumberGuest("")
        setOccasion("Ordinary Dinner")
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You have reserve the table successfully!!See you soon!!");
        clearForm();

        const formData = { date: date, time: time, numberGuest: numberGuest, occasion: occasion}
        console.log(formData)
        submitAPI(formData)

        navigate('/bookingconfirm')
    }

    return (
            <form onSubmit={handleSubmit} style={{margin: "100px auto", display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label htmlFor="res-date">Choose date</label>
                <input value={date} onChange={dateChange} type="date" id="res-date" required/>
                <label htmlFor="res-time">Choose time</label>
                <select value={time} onChange={(e)=> setTime(e.target.value)} id="res-time" required>
                    {state.map(function(i){return <option key={i} value={i}>{i}</option>})}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input value={numberGuest} onChange={(e)=> setNumberGuest(e.target.value)} type="number" placeholder="2" min="1" max="10" id="guests" required/>
                <label htmlFor="occasion">Occasion</label>
                <select value={occasion} onChange={(e)=> setOccasion(e.target.value)} id="occasion" required>
                    <option value="Ondinary Dinner">Ondinary Dinner</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your Reservation" />
            </form>
    )
}