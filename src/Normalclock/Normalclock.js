import React, { useEffect } from 'react'
import "../Normalclock/Normalclock.css"

function Normalclock() {

//  useEffect(()=>{
//     setInterval(()=>{
//         var d=new Date()
//         var hour=d.getUTCHours()
//         var min=d.getMinutes()
//         var sec=d.getSeconds()

//        var hourrot=30*hour+min/2;

//        var minsrot=6*min;
//        var secrot=6*sec;
//        sec.style.transform=`rotate(${secrot}deg)`
//        hour.style.transform=`rotate(${hourrot}deg)`
//        min.style.transform=`rotate(${minsrot}deg)`
//     })
//  },[setInterval])

useEffect(() => {
    const intervalId = setInterval(() => {
      var d = new Date();
      var hour = d.getUTCHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();

      var hourrot = 30 * hour + min / 2;

      var minsrot = 6 * min;
      var secrot = 6 * sec;

      document.querySelector('.sec').style.transform = `rotate(${secrot}deg)`;
      document.querySelector('.hour').style.transform = `rotate(${hourrot}deg)`;
      document.querySelector('.min').style.transform = `rotate(${minsrot}deg)`;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='outerclock'>
<div className='innerclock'>
<div className='circle'>




</div>
<div className='hour'></div>
<div className='min'></div>
<div className='sec'></div>

</div>
<div className='time'>
<p>12</p>
<p>9</p>
<p>6</p>
<p>3</p>
</div>
 </div>
  )
}

export default Normalclock