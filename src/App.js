import { useState } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import ToggleButton from './ToggleButton';
import { Users } from './Users';
function App() {


  const [counttt , setCounntt] =useState(0)

  return (
    <div>
      {counttt}
      <Users/>
      <RegistrationForm/>
      <ToggleButton/>
      <button onClick={()=>setCounntt(counttt + 1)}>Click</button>
    </div>
  );
}

export default App;
