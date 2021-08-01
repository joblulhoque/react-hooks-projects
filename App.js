import react, {useState, useEffect} from 'react';
import './App.css';


function App() {
 const [time,setTime] = useState(Date);
  
 useEffect( () => {

   const handle = setInterval(()=>{
      setTime(Date);
   },1000);

   return function () {
     clearInterval(handle);
   }

 });

  return (
    <div className="App">
      <h1>Use Effect example </h1>
      <h3>Date and time : {time}</h3>
      
    </div>
  );
}

export default App;
