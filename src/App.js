import './App.css';
import { useState, useEffect } from 'react';

function App() {

  let [date, setDate ] = useState(new Date());
  useEffect(()=>{setDate(new Date())},[date]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          {
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
          }
        </div>
      </div>
    </div>
  );
}
export default App;
