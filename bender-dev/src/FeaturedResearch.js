import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";




class Research extends React.Component {
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
                    <Typography variant='h3'>Research</Typography>
                </header>
                <body>
                    <div className="h2s">
                        <Typography variant='h4'>Distributed Systems</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            A distributed systems paper based off readings from Maarten van Steen and Andrew S. Tanenbaum’s Distributed Systems 
                            and James F. Kurose and Keith W. Ross’ Computer Networking A Top-Down Approach. Assignments from Winter Quarter 
                            2021 DePaul University from Professor Dr. Clark Elliott. Dives into concepts including, what is a distributed 
                            system, middleware, Security with public Keys and Secret Keys, Blockchain, Networking, Threads, Sockets, 
                            Severs, Clients and much more. The paper starts off with 20 main concepts learned from the class. Then 
                            goes into depth on the different chapters within the books. And wraps up with information about the 
                            assignments done in class including network labs and programing assignments. <a href="./ResearchDS.js">More ...</a>
                        </Typography>
                    </div>

                </body>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<Research classes={props.classes} />);
}