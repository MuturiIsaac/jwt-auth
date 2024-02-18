import React, { useState } from 'react';
import './App.css';
import { MDBContainer } from 'mdb-react-ui-kit';
import Signup from './components/Signup';
import Signin from './components/Signin'; // Import the Signin component
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const [showSignin, setShowSignin] = useState(false);
  
  return (
    <div className="App">
      <MDBContainer fluid>
        {!showSignin ? <Signup setShowSignin={setShowSignin} /> : <Signin />}
      </MDBContainer>
    </div>
  );
}

export default App;
