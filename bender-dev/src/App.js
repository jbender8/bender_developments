import React from 'react';
import Box from '@material-ui/core/Box';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Reachme from './contact';
import HomeWindow from "./homepage";
import Aboutme from './About';
import Research from './Researchhome';
import Main from './mainPortolio';



const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Contact Me" {...a11yProps(2)} />
          
          <Tab label="Portfolio"{...a11yProps(3)} />
          <Tab label="Papers & Research "{...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contactme/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PortfolioMain/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Papers/>
      </TabPanel>
      
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

function Home() {
  const classes = useStyles();
  return (
    <div>
      <HomeWindow classes={classes}/>
      <Footer/>
    </div>
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

function PortfolioMain(){
  const classes = useStyles();
  return (
    <div>
      <Main/>
      <Footer/>
    </div>
  );
}


function Papers(){
  const classes = useStyles();
  return (
    <div>
      <Research classes={classes}/>
      <Footer/>
    </div>
  );
}






