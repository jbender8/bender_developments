import './App.css';
import Reachme from './contact';
import HomeWindow from "./homepage";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Aboutme from './About';
import Portfolios from './portfolio';



const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    zIndex: -1,
  },
  footer: {
    color: 'white',
    background: "#282c34",
    fontSize: 17,
  },
  footerBar: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
}));

export default function App() {
  return (
    <div>
      <Portfolio/>
    </div>
  );
}


function Home() {
  const classes = useStyles();
  return (
    <div>
      <HomeWindow classes={classes}/>
      <Footer/>
    </div>
  );
}

function Footer(){
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.footerBar}>
      <Typography variant='h2' className={classes.footer}>
        Jessica Bender © Copyright 2021 
      </Typography>
    </AppBar>

  );
}

function Contactme(){
  const classes = useStyles();
  return (
    <div>
      <Reachme classes={classes}/>
      <Footer/>
    </div>
  );
}

function About(){
  const classes = useStyles();
  return (
    <div>
      <Aboutme classes={classes}/>
      <Footer/>
    </div>
  );
}

function Portfolio(){
  const classes = useStyles();
  return (
    <div>
      <Portfolios classes={classes}/>
      <Footer/>
    </div>
  );
}




