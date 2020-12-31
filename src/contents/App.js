import './App.css';
import Basic from 'components/mainLeft/basic';
import Paper from 'components/mainRight/paper/Paper';
import Login from 'components/login/login';
import Admin from 'components/admin/admin';
import Register from 'components/login/register';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import ContentProvider from '../contexts/context';
import { Button, makeStyles } from '@material-ui/core';
import logo from '../asset/logoCV.jpg';
import logoClick from '../asset/logoClick.jpg';


function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      minWidth: 100,
      marginLeft: 30,
    },
  });
  const classes = useStyles();
  
return (
  <div className= "left">
      <div className='headerLeft'>
          <Link to="/" style={{ textAlign: "left" }}>
              <img src={logo} alt="logo" className="img2" />
          </Link>
      </div>
      <div className="cards">
          <img src={logoClick} alt="logo" className="imgThumb" />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header"
          >
            Click vào đây
          </Button>
      </div>
  </div>
);
}

function App() {
  return (
    <div className="App">
        <ContentProvider>
          <BrowserRouter>
            <Switch> 
              <Route path="/" component={Login} exact />
              <Route path="/admin" component={Admin}  />
              <Route path="/admin/viewCv/:id" component={Paper}  />
              <Route path="/register" component={Register} exact />
              <Route path="/basic" component={Basic} exact />
            </Switch>
          </BrowserRouter>
      </ContentProvider>
    </div>
  );
}

export default App;
