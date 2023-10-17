import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import { StyledApp } from './styles/StyledApp';
import Register from './Register';


function App() {
  return (
    <StyledApp>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/register" element = {<Register />}/>
        </Routes>
    </StyledApp>
  );
}

export default App;
