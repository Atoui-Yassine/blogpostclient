import React, { useEffect, useState }  from 'react';
import { UidContext } from './components/AppContext';
import Routes from "./components/routes"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";


const App = () => {
 const [uid, setUid] = useState(null);
 const dispatch = useDispatch();
  //a chaque compent en controle le token de user 
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
         // console.log(res.data)
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid,dispatch]);

  return (
    <UidContext.Provider value={uid}>
       
       <Routes />
      
    </UidContext.Provider>
  );
};

export default App;