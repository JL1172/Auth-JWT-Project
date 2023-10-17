import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { StyledApp } from './styles/StyledApp';
import Register from './components/Register';


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
