import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";



class Angular extends React.Component {
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
                    <Typography variant='h2'>Bender Developments</Typography>
                    <Typography variant='h3'>Angular Websites</Typography>

                </header>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<Angular classes={props.classes} />);
}