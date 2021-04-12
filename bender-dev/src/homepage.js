import logo from './program.png';
import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import { Grid } from '@material-ui/core';


class HomeWindow extends React.Component {
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
                    <img src={logo} className="App-logo" alt="Covid-19 logo" />
                    <Typography variant='h2'>Bender Developments</Typography>
                    <Typography variant='subtitle1'>Website Development | Application Development | Backend Development</Typography>
                </header>
                <body>
                    <div className="about">
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Languages</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Software</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h5' color="primary">Operating Systems</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>
                                            Python
                                        </li>
                                        <li>
                                            Java
                                        </li>
                                        <li>
                                            C
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            JavaScript
                                        </li>
                                        <li>
                                            SQL
                                        </li>
                                        <li>
                                            IPython
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                <ul>
                                        <li>
                                            Python
                                        </li>
                                        <li>
                                            Java
                                        </li>
                                        <li>
                                            C
                                        </li>
                                        <li>
                                            HTML
                                        </li>
                                        <li>
                                            CSS
                                        </li>
                                        <li>
                                            JavaScript
                                        </li>
                                        <li>
                                            SQL
                                        </li>
                                        <li>
                                            IPython
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h6'>
                                    <ul>
                                        <li>
                                            Windows
                                        </li>
                                        <li>
                                            Linux
                                        </li>
                                        <li>
                                            Mac
                                        </li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </body>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<HomeWindow classes={props.classes} />);
}
