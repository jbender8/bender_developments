import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import {Form} from 'semantic-ui-react';




class Contact extends React.Component {
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
                <div className="App-body">
                    <div className="Contact-title">
                        <Typography variant='h3'>Contact Me</Typography>
                        <Typography className="subtitle" variant='h6'>Fill in the form below to get in contact with me!</Typography>
                    </div>
                    <div className="Available">
                        <h4 className="avail">
                            Now Accepting Freelance Jobs for April 2021!
                        </h4>

                    </div>
                    <div className="form">
                        <form>
                            <label>
                                Name:
                                <br/>
                                <input type="text" name="name" />
                            </label>
                            <br/>
                            <label>
                                Email:
                                <br/>
                                <input type="text" name="Email" />
                            </label>
                            <br/>
                            <label>
                                Message:
                                <br/>
                                <input type="text" name="Email" />
                            </label>
                            <br/>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<Contact classes={props.classes} />);
}