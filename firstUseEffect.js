import react, {useState, useEffect} from 'react';
import './App.css';

let born = false;
function FirstUseEffect() {

  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect( () => {
    if(born){
      document.title = "nirvana attained";
    }
  },[nirvana]);

  useEffect( () => {
    console.log("I am born.");
  },[]);

  useEffect( () => {
   if(born){
     console.log(" make mistake and learn");
   } else {
     born = true;
   }
   if(growth > 70){
     setNirvana(true);
   }
   return function cleanup() {
     console.log("cleanup after mistakes.");
   }
  });

  function growHandle () {
    setGrowth( growth + 10);
  }

  return (
    <div className="App">
      <h1>Use Effect.</h1>
      <h3>Growth: {growth}</h3>
      <button onClick={growHandle}>learn and grow</button>
    </div>
  );
}

export default FirstUseEffect;