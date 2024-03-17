import { getData } from "../services/data.js"
import { useState, useEffect } from "react"


function CounterData() {
  let [counters, setCounters] = useState([])
  
  async function fetchData(){
    let allCounters = getData()
    setCounters(allCounters)
  }
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <div>Data</div>
  )
}

export default CounterData