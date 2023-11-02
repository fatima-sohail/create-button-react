import React from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import { useState } from 'react'


const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Alert</Alert>}
      <Button color='primary' onClick={()=> setAlertVisibility(true)}>My Button</Button>
    </div>
  )
}

export default App
