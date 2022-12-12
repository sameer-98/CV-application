import React, { Component } from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Personal from "./Forms/Personal";
import WorkExp from "./Forms/WorkExp";
import EductaionExp from "./Forms/Education";

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
                paddingBottom: '20px',
            }}>
                <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '20px', marginTop: '20px'}}>
                    Personal Information
                </Typography>
                <Personal/>
                <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '20px',marginTop: '40px'}}>
                    Work Experience
                </Typography>
                <WorkExp/>
                <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '20px', marginTop: '40px'}}>
                    Education Experience
                </Typography>
                <EductaionExp/>
            </Paper>

        );
    }

}
export default Userform