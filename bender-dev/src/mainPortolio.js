import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core/styles';
import Portfoliosios from './portfolioios';
import PortfoliosReact from './PortfoliosReact';
import PortfolioCus from './PortfolioCustom';
import PortfolioAnd from './Portfolioandroid';
import PortfolioAng from './PortfolioAngular';
import PortfolioSP from './PortfolioSharePoint';
import FeaturedPort from './featuredport';
import Java from './javaProjects'
import ReactNativeApps from './ReactNative'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        color: 'white',
        width: '220px',
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
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
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


  export default function MainPortfolio () {
        const handleChange = (event, newValue) => {
            setValue(newValue);
          };
          const [value, setValue] = React.useState(0);
          const classes = useStyles();

        return (
            <div className={classes.root}>
                <Tabs value={value} onChange={handleChange} aria-label="Tabs" orientation="vertical" variant="scrollable" className={classes.tabs}>
                    <Tab label="Featured" {...a11yProps(0)} />
                    <Tab label="React Websites" {...a11yProps(1)} />
                    <Tab label="Custom HTML, CSS and JavaScprit" {...a11yProps(2)} />
                    <Tab label="Andriod Apps"{...a11yProps(3)} />
                    <Tab label="Share Point"{...a11yProps(4)} />
                    <Tab label="Angular Websites"{...a11yProps(5)} />
                    <Tab label="iOS Apps" {...a11yProps(6)} />
                    <Tab label="Java Projects" {...a11yProps(7)} />
                    <Tab label="React Native Apps" {...a11yProps(8)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Featured/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <PortfolioReact/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <PortfolioCustom/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Portfolioandroid/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Portfoliosp/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Portfolioangular/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Portfolioios/>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <JavaPro/>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <ReactNative/>
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

function Portfolioios(){
    const classes = useStyles();
    return (
      <div>
        <Portfoliosios classes={classes}/>
        <Footer/>
      </div>
    );
  }
  
  function PortfolioReact(){
    const classes = useStyles();
    return (
      <div>
        <PortfoliosReact classes={classes}/>
        <Footer/>
      </div>
    );
  }
  
  function PortfolioCustom(){
    const classes = useStyles();
    return (
      <div>
        <PortfolioCus classes={classes}/>
        <Footer/>
      </div>
    );
  }
  
  function Portfolioandroid(){
    const classes = useStyles();
    return (
      <div>
        <PortfolioAnd classes={classes}/>
        <Footer/>
      </div>
    );
  }
  
  function Portfolioangular(){
    const classes = useStyles();
    return (
      <div>
        <PortfolioAng classes={classes}/>
        <Footer/>
      </div>
    );
  }
  
  function Portfoliosp(){
    const classes = useStyles();
    return (
      <div>
        <PortfolioSP classes={classes}/>
        <Footer/>
      </div>
    );
  }
  function Featured(){
    const classes = useStyles();
    return (
      <div>
        <FeaturedPort classes={classes}/>
        <Footer/>
      </div>
    );
  }
  function JavaPro(){
    const classes = useStyles();
    return (
      <div>
        <Java classes={classes}/>
        <Footer/>
      </div>
    );
  }
  function ReactNative(){
    const classes = useStyles();
    return (
      <div>
        <ReactNativeApps classes={classes}/>
        <Footer/>
      </div>
    );
  }
