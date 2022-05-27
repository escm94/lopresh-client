import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UserContext = createContext();

// this provider will use this to wrap our app component, so that means we will receive the children prop
// so anything wrapped with this will be available at children props
// we will return that children prop so whatever is in the app.js, the entire application will be returned along with the context state
const UserProvider = ({ children }) => {
  // when user successfully logs in, we update the state in the context
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  // default with info from localstorage upon page load/reload, if available
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);

  const router = useRouter();

  // configure axios for reducing duplicate code later
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios.interceptors.response.use(
    function (response) {
      // Do something before response is sent
      return response;
    },
    function (error) {
      // Do something with response error
      let res = error.response;
      /* 401 = unauth error  */
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        setState(null);
        window.localStorage.removeItem("auth"); // remove user and token from local storage
        router.push("/login");
      }
    }
  );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

// so once we have this context, we can wrap our app component with this context so that we can access this state and update state using setState
export { UserContext, UserProvider };
