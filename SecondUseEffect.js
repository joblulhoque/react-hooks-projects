import react, {useState, useEffect} from 'react';

const initXY = {
    x:null,
    y: null
}


function SecondUseEffect() {
 const [time,setTime] = useState(Date);
 const [xy,setXY] = useState(initXY);
  
 useEffect( () => {

   const handle = setInterval(()=>{
      setTime(Date);
   },1000);

   return function () {
     clearInterval(handle);
   }

 });

 function mousemoveHandle (e){
     setXY({
         x:e.clientX,
         y:e.clientY
     });
     
 }

 useEffect( () => {
     window.addEventListener("mousemove",mousemoveHandle);
     window.removeEventListener("mousemove",mousemoveHandle);
 });

  return (
    <div >
      <h1>Use Effect example </h1>
      <h3>Date and time : {time}</h3>
      <h3>x:{xy.x} && y:{xy.y}</h3>
    </div>
  );
}

export default SecondUseEffect;