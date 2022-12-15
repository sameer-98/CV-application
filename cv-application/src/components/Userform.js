import { Typography, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Personal from "./Forms/Personal";
import WorkExp from "./Forms/WorkExp";
import EducationExp from "./Forms/Education";
import { Component } from "react";

class Userform extends Component{

    addHandler = (event) => {
        this.props.addHandler(event.target.id)
    }

    render(){
        const { fields, handlePersonalFields, handleWorkFields, handleEducationFields, handleWorkDelete, handleEducationDelete } = this.props;
        const { personal, work, education } = fields;

        return (
            <Paper elevation={3} sx={{
                padding: '20px',
            }}>
                <Typography gutterBottom variant="h5" color="primary" sx={{marginLeft: '0', marginTop: '20px'}}>
                    Personal Information
                </Typography>
                <Personal fieldValues={personal} handler={handlePersonalFields} />
                <Typography gutterBottom variant="h5" color="primary" sx={{marginLeft: '0',marginTop: '40px'}}>
                    Work Experience
                </Typography>
                <WorkExp fieldValues={work} handler={handleWorkFields} deleteHandler={handleWorkDelete}/>
                <Button fullWidth onClick={this.addHandler} id="work" variant="contained" size="large" sx={{ m: 1 }}>Add</Button>
            
                <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '0', marginTop: '40px'}}>
                    Education Experience
                </Typography>
                <EducationExp fieldValues={education} handler={handleEducationFields} deleteHandler={handleEducationDelete}/>
                <Button fullWidth onClick={this.addHandler} id="education" variant="contained" size="large" sx={{ m: 1 }}>Add</Button>
            </Paper>);
    }
}


export default Userform