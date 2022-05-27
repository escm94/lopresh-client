import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";

const Login = () => {
  const [email, setEmail] = useState("olivia@gmail.com"); // TODO: hardcoding for now, remove later
  const [password, setPassword] = useState("weens19"); // TODO: hardcoding for now, remove later
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        // update context
        setState({
          user: data.user,
          token: data.token,
        });

        // save in local storage as well
        window.localStorage.setItem("auth", JSON.stringify(data));
        router.push("/user/dashboard"); // upon successful login, take them to their dashboard page
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  // if user is logged in, redirect them to dashboard and don't show login page (prevents user from navigating here through URL manipulation)
  if (state && state.token) router.push("/user/dashboard");

  return (
    <div className="container-fluid">
      <div className="row py-5 text-light bg-default-image">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            Not yet registered?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            <Link href="/forgot-password">
              <a className="text-danger">Forgot password</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
