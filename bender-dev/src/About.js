import school from './grad.jpg';
import discover from './discover.png'
import cap from './br.jpg'
import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import { Grid } from '@material-ui/core';



class About extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            classes: props.classes,
        };
    }
    render() {
        const { classes } = this.state;
        return (<main className={classes.content}>
            <div className="App">
                <header className="App-header">
                    
                    <Typography variant='h2'>About Me</Typography>
                    <Typography variant='h4'>Jessica Bender</Typography>
                    <hr style={{width: 1415}}/>
                    <div className="about">
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Schooling</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Work</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Fun Facts</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                    DePaul U 
                                    Bachorlors of Science in Computer Science
                                    Class of 2020
                                    <br/>
                                    <img src={school} className="grad-photo" alt="Jessica at DePaul 2020 Graduation" />
                            </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                    Discover F S
                                    <br/>
                                    <img src={discover} className="discover-photo" alt="Jessica at DePaul 2020 Graduation" />
                            </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                    Hi
                                    <br/>
                                    <img src={cap} className="cap-photo" alt="Jessica at DePaul 2020 Graduation" />
                            </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </header>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<About classes={props.classes} />);
}