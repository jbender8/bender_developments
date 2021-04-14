import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core/styles';
import DataStructurs from './ResearchDS'
import Featuredr from './FeaturedResearch'


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
                    <Tab label="Distributed Systems" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Featured/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DistributedSystems/>
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
function Featured(){
    const classes = useStyles();
    return (
      <div>
        <Featuredr classes={classes}/>
        <Footer/>
      </div>
    );
  }

function DistributedSystems(){
    const classes = useStyles();
    return (
      <div>
        <DataStructurs classes={classes}/>
        <Footer/>
      </div>
    );
  }
  