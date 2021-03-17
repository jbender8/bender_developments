import logo from './program.png';
import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";


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
                </header>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<HomeWindow classes={props.classes} />);
}
