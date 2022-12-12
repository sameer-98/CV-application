import React, { Component } from "react";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Personal from "./Forms/Personal";
import WorkExp from "./Forms/WorkExp";

class Userform extends Component{

    constructor(props){
        super(props)
        
        this.state = {}
    }
    render(){
        return (
            <Paper elevation={3} sx={{
                paddingRight: '20px',
                paddingTop: '20px',
                paddingBottom: '20px'
                
            }}>
                <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '20px'}}>
                    Personal Information
                </Typography>
                <Personal/>
                <Typography gutterBottom marginTop={2} variant="h5" color="primary" sx={{paddingLeft: '20px'}}>
                    Work Experience
                </Typography>
                <WorkExp/>
            </Paper>

        );
    }

}
export default Userform