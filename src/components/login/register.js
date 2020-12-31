import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

const Register = () => {
    let history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rppassword, setRpPassword] = useState('');
    const [errors, setErrors] = useState('');
    var users = JSON.parse(localStorage.getItem('user')) || [];
    function handleRegister () {
       console.log(users.length);
        if(rppassword === password) {
            const user = {
                username: username,
                password: password
            };
            users.push(user);
            localStorage.setItem('user' , JSON.stringify(users));
            alert('Register success!')
            window.location.href = '/';
        } else {
            setErrors('Password do not match');
        }
       
    };
  return (
    <div className="formLogin">
<form>
      <Card >
        <CardHeader  title="Register" />
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
            <TextField
              fullWidth
              id="rppassword"
              defaultValue={rppassword}
              type="password"
              label="Repeat Password"
              placeholder="Repeat password"
              margin="normal"
              onChange={(e) => setRpPassword(e.target.value)}
            />
          </div>
        </CardContent>
        
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleRegister}
           >
            Register
          </Button>
        </CardActions>
      </Card>
     
    </form>
    </div>
    
  );
}

export default Register;