import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { StyledApp } from './styles/StyledApp';
import Register from './components/Register';
import { useState } from 'react';
import { loginUser, registerUser } from './axiosActions/axios-actions';
import { GlobalProvider } from "../src/components/contexts/GlobalProvider"
import { Alert } from '@mui/material';
import Protected from "./components/Protected"; 
import User from './components/User';
import Logout from './components/Logout';
import Settings from './components/Settings';

const initialState = {
  user_username: "",
  user_password: "",
  role_name: "",
}
function App() {
  const [inputValues, setInputValues] = useState(initialState)
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [initial,setInitial] = useState(""); 

  const nav = useNavigate();



  const changeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  }

  const login = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSpinnerOn(true);
    loginUser({ user_username: inputValues.user_username, user_password: inputValues.user_password })
      .then(res => {
        window.localStorage.setItem("token",JSON.stringify(res.data.token));
        const firstInitial = res.data.message.split(" ");
        const third = firstInitial[2];
        const thirds = third[0].toUpperCase();
        window.localStorage.setItem("initial",JSON.stringify(thirds));  
        setSuccessMessage(res.data.message);
        setSpinnerOn(false);
        setInputValues(initialState);
        nav("/protected"); 
      }).catch(err => {
        setErrorMessage(err.response.data.message);
        setSpinnerOn(false);
      })
  }

  const register = (e) => {
    window.localStorage.clear();
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSpinnerOn(true);
    registerUser(inputValues)
      .then(res => {
        nav("/");
        setSuccessMessage(`Welcome ${res.data.user_username}, login to proceed`)
        setSpinnerOn(false);
      }).catch(err => {
        console.log(err)
        setErrorMessage(err.response.data.message);
        setSpinnerOn(false);
      })
  }

  const closeMessage = () => {
    setSuccessMessage("");
    setErrorMessage("");
  }

  const logoutOfProfile = (e) => {
    window.localStorage.clear();
    setSuccessMessage("");
    setErrorMessage("");
    setInputValues(initialState);
    setInitial("");
    nav("/");
  }

  return (
    <GlobalProvider.Provider value={{ login, register, changeHandler, inputValues, spinnerOn, initial, logoutOfProfile }}>
      <StyledApp>
      {window.localStorage.getItem("initial") && <Logout/>}
        {errorMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="error">{errorMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        {successMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="success">{successMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protected" element={<Protected />} />
          <Route path = "/user/protected/auth/asdflkjasdI_jwJLIE4ivHJ" element = {<User />}/>
          <Route path = "/users/protected/auth/settings" element = {<Settings />} />
        </Routes>
      </StyledApp>
    </GlobalProvider.Provider>
  );
}

export default App;
