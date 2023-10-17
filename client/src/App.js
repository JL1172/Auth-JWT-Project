import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import { StyledApp } from './styles/StyledApp';
import Register from './components/Register';
import { useState } from 'react';
import { loginUser, registerUser } from './axiosActions/axios-actions';
import { GlobalProvider } from "../src/components/contexts/GlobalProvider"
import { Alert } from '@mui/material';

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
        window.localStorage.setItem("token",res.data.token);
        setSuccessMessage(res.data.message);
        setSpinnerOn(false);
        setInputValues(initialState);
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

  return (
    <GlobalProvider.Provider value={{ login, register, changeHandler, inputValues, spinnerOn }}>
      <StyledApp>
        {errorMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="error">{errorMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        {successMessage && <Alert style={{ zIndex: "3", position : "fixed", width : "100%" }} severity="success">{successMessage}<span onClick={closeMessage} id ="close" className="material-symbols-outlined">
          close
        </span></Alert>}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </StyledApp>
    </GlobalProvider.Provider>
  );
}

export default App;
