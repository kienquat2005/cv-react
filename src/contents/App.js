import './App.css';
import Basic from 'components/mainLeft/basic';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import ContentProvider from '../contexts/context';
import Right from 'components/mainRight/right';
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
              <Route path="/" component={Templates} exact />
              <Route path="/basic" component={Basic} />
            </Switch>
          </BrowserRouter>
      <Right />
      </ContentProvider>

    </div>
  );
}

export default App;
