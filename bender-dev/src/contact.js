import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import * as emailjs from 'emailjs-com';

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Subject: '',
            Message: '',
            classes: props.classes,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            Name: event.target.value,
        });
    }
    handleSubjectChange(event) {
        this.setState({
            Subject: event.target.value,
        });
    }

    handleEmailChange(event) {
        this.setState({
            Email: event.target.value,
        });
    }

    handleMessageChange(event) {
        this.setState({
            Message: event.target.value,
        });
    }

    async handleSubmit() {
        if (this.state.Name !== '' && this.state.Email !== '' && this.state.Message !== "" && this.state.Email.includes("@") && this.state.Email.includes(".")) {
            this.setState({
                sent: true,
                errortwo: false,
                error: false
            });
        } 
        else if(this.state.Name === '' || this.state.Email === '' || this.state.Message === ""){
            this.setState({
                error: true,
                errortwo: false
            });
        }
        else if(!(this.state.Email.includes("@")) || !(this.state.Email.includes("."))){
            this.setState({
                errortwo: true,
                error: false
            });

        }
        else {
            this.setState({
                error: true,
                errortwo: false
            });
        }
    }
    render() {
        const { classes } = this.state;
        const {error, errortwo, sent, Name, Email, Message, Subject } = this.state;
        return (<main className={classes.content}>
            <div className="App">
                <body className="App-body">
                    <div className="title">
                        <Typography variant='h3'>
                            Contact Me
                        </Typography>
                        <Typography className="subtitle" variant='h6'>
                            Fill in the form below to get in contact with me!
                        </Typography>
                    </div>
                    <div className="Available">
                        <h4 className="avail">
                            Now Accepting Freelance Jobs for April 2021!
                        </h4>
                    </div>
                    <div className="form">
                    {error ? <Alert severity="error">Name , Email or Message cannot be left blank</Alert>
                    : void 0}
                    {errortwo ? <Alert severity="error">Not a valid Email. Must cointain "@" and "." example@example.com</Alert>
                    : void 0}
                    {sent ? <Alert severity="success">
                                <p>Thanks {this.state.Name}, Email sent successfully! </p>
                                <p>Please allow 1-2 business days for a reply</p> 
                            </Alert>: void 0}
                        <form>
                            Name: 
                            <div className="formInput">
                                <InputBase
                                    placeholder="Enter your Name"
                                    inputProps={{ 'aria-label': 'Enter your Name' }}
                                    value={Name}
                                    onChange={this.handleNameChange}
                                    style={{ padding: "10px", width: "935px", fontFamily:"sans-serif", fontSize: "18px", color: "gray" }}
                                />
                            </div>
                            Email Address:
                            <div className="formInput">
                                <InputBase
                                    placeholder="Enter your Email"
                                    inputProps={{ 'aria-label': 'Enter your Email' }}
                                    value={Email}
                                    onChange={this.handleEmailChange}
                                    style={{ padding: "10px", width: "935px", fontFamily:"sans-serif", fontSize: "18px", color: "gray" }}
                                />
                            </div>
                            Subject:
                            <div className="formInput" style={{}}>
                                <InputBase
                                    placeholder="Enter your Subject"
                                    inputProps={{ 'aria-label': 'Enter your Subject' }}
                                    value={Subject}
                                    onChange={this.handleSubjectChange}
                                    style={{ padding: "10px", width: "935px", fontFamily:"sans-serif", fontSize: "18px", color: "gray"}}
                                />
                            </div>
                            Message:
                            <div className="formInput" style={{marginBottom: "15px"}}>
                                <textarea
                                    placeholder="Enter your Message"
                                    inputProps={{ 'aria-label': 'Enter your Message' }}
                                    value={Message}
                                    onChange={this.handleMessageChange}
                                    style={{ padding: "10px", width: "935px", height: "150px", fontFamily:"sans-serif", fontSize: "18px", color: "GrayText", opacity:"40%"}}
                                />
                            </div>
                            <div>
                                <Button className="updateButton home" style={{ color: "white", padding: "10px", width: "120px", height: "40px" }} onClick={this.handleSubmit}>
                                    SEND
                                </Button>
                            </div>
                        </form>
                    </div>
                </body>
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<Contact classes={props.classes} />);
}