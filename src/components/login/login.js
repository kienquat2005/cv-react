import React, { useState, useEffect } from "react";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      username: "thanh123@gmail.com",
      password: "thanh123",
    }
  );
  console.log(state);
  function handleLogin() {
    for(let i in state) {
      if (username == state[i].username && password == state[i].password) {
        window.location.href = "/basic";
      } else {
        setErrors("Invalid username and password");
      }
    }
    
    console.log(username, password);

    console.log(state);
  }

  return (
    <div className="formLogin">
      <form>
        <Card>
          <CardHeader title="Login App Create CV" />
          <p>{errors}</p>
          <CardContent>
            <div>
              <TextField
                fullWidth
                id="username"
                defaultValue={username}
                type="email"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                fullWidth
                defaultValue={password}
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <a className="btn btn-primary" href="/register">
              Register
            </a>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default Login;
