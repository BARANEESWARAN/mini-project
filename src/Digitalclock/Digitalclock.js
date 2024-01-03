import React from 'react'
import "../Digitalclock/Digitalclock.css"

function Digitalclock() {
    function Time(){
        var date=new Date()
        var min=date.getMinutes()
        var sec=date.getSeconds()
        var hours=date.getHours()
        setTimeout(Time,1000)
        return hours +":"+min+":"+sec
      
    }
  return (
    <div className='clock_container'>
        <div className='box'>{Time()}</div>
        <div className='display'>{Time()}</div>
    </div>
  )
}

export default Digitalclock