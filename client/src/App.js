import './App.css';
import {MDBContainer,}from 'mdb-react-ui-kit';
import Signup from './components/Signup';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  return (
    <div className="App">
     <MDBContainer fluid>
      <Signup />
    </MDBContainer>
    </div>
  );
}

export default App;
