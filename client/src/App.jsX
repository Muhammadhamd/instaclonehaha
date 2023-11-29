import React, { useEffect, useState , useContext} from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from "axios";
import {GlobalContext} from  './context/context.jsx'
// import UserLogin from "./component/login";
// import UserRegister from "./component/register";
import Profile from "./components/profile.jsx";
import HomePage from "./components/home.jsx";
function App() {
  const { state, dispatch } = useContext(GlobalContext);
  const [theme, setTheme] = useState(null); // Set the initial state as needed
  const [login, setLogin] = useState(null);
  useEffect(() => {
    axios.interceptors.request.use(
      function (config) {
        config.withCredentials = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }, []);
  const loginHandler = async()=>{
    try {
      const res = await axios.get("/getToken",
      {withCredentials: true,
      })
      console.log(res)
      dispatch({
        type: "USER_LOGIN",
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error)
      dispatch({
        type: "USER_LOGOUT"
      })
    }
  }
  useEffect(()=>{
   loginHandler()
  },[])
  useEffect(()=>{
  },[])
  // Other code...
  console.log(state.role , state.isLogin)
  return (
    <div>
      {state.isLogin === true && state.role === "user" ? (
        <>
          {/* <Navcomponent theme={state.darkTheme} islogin={true} /> */}
          <Routes>
            {/* <Route exact path="/" element={<Home theme={state.darkTheme} />} /> */}
          </Routes>
        </>
      ):null}
      {state.isLogin === false ? (
        <>
        {/* <Navcomponent theme={state.darkTheme} islogin={false} /> */}
        <Routes>
          
         <Route exact path="/" element={<HomePage theme={state.darkTheme} />} />

         <Route exact path="/:username" element={<Profile theme={state.darkTheme} />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </>
      ):null
    }
    </div>
  );
}
export default App;