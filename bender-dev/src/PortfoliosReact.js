import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";



class PortfolioReact extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            classes: props.classes,
        };
    }
    render() {
        const { classes } = this.state;
        return (<main className={classes.content}>
                https://jbender8.github.io/Web-Apps-Final/                
            <div className="App">
                <body className="App-body" style={{paddingLeft:"200px"}}>
                    <div className="title">
                        <Typography variant='h3'>
                            React
                        </Typography>
                    </div>
                    <div className="covid">
                        <h5>
                            Chicago COVID-19 Number Cruncher 
                        </h5>
                        <p><a href= "https://jbender8.github.io/Web-Apps-Final/ ">Check me out!</a></p>
                    </div>
                </body>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<PortfolioReact classes={props.classes} />);
}