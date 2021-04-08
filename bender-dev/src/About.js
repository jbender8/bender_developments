import school from './grad.jpg';
import work from './work.png'
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
                <body className="App-body">
                    <div className="title">
                        <Typography variant='h3'>
                            About Jessica Bender
                        </Typography>
                        <hr style={{width: 1420}}/>
                    </div>
                    <div className="about">
                        <div className="grad">
                            <img src={school} className="grad-photo" alt="Jessica at DePaul 2020 Graduation" />
                        </div>
                        <div className="intro">
                        <p className="hello">
                            Hello! My name is Jessica Bender! I am a software developer. I Graduated from 
                            DePaul University in 2020 with a Bacholors of Science in Computer Science. I also got two 
                            minors in Photography and Grapic Design. 
                            I am currently persuing my Masters of Science in Software Engineer from DePaul Univesity.
                        </p>
                        </div>
                        <br/><br/>
                    </div>
                    <div className="about">
                        <div className="intro">
                            <h3>Work</h3>
                            <p className="hello">
                                Hello! My name is Jessica Bender! I am a software developer. I Graduated from 
                                DePaul University in 2020 with a Bacholors of Science in Computer Science. I also got two 
                                minors in Photography and Grapic Design. 
                                I am currently persuing my Masters of Science in Software Engineer from DePaul Univesity.
                            </p>
                        </div>
                        <br/><br/>
                    </div>
                    <img src={cap} className="cap-photo" alt="Jessica at DePaul 2020 Graduation" />
                </body>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<About classes={props.classes} />);
}