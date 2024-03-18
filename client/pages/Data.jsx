import { getData } from "../services/data.js"
import { useState, useEffect } from "react"


function CounterData() {
  let [counters, setCounters] = useState([])
  
  async function fetchData(){
    let allCounters = getData()
    setCounters(allCounters)
    console.log(setCounters) //need to test to ensure data is being pulled
  }
    useEffect(() => {
      fetchData()
      
    }, [])

    console.log(console.log(setCounters)) //need to test to ensure data is being pulled

    counters.map((counter) => {
      console.log(counter)
    })

  return (

    <div></div>
  )
}

export default CounterData