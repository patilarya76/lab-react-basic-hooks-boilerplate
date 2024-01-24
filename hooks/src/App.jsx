import React from 'react';
import { useState } from 'react';
import './App.css';


import Progression1 from './Components/Progression1'



export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Progression1/>
     
    </ToggleTheme.Provider>
  );
}

export default App;