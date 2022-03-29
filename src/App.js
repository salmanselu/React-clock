import './App.css';
import { useState, useEffect } from 'react';

function formatTime(time){
  if(time > 9) return time;
  return "0" + time;
}
function App() {

  let [date, setDate ] = useState(new Date());
  useEffect(()=>{setDate(new Date())},[date]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          {
            formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds())
          }
        </div>
      </div>
    </div>
  );
}
export default App;
