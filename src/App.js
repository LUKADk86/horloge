import React, { useState }from 'react';
import './App.css';

function App() {
  const [ currentTime, setCurrentTime ] = useState();
  const date = new Date();
  setInterval(() => {setCurrentTime(date)}, 1000);
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours()

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
