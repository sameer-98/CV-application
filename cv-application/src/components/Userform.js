import { Typography, Button, Grid } from "@mui/material";
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
                padding: '30px',

            }}>
                <Grid container direction={'column'}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" color="primary" sx={{marginLeft: '0', marginTop: '20px'}}>
                            Personal Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Personal fieldValues={personal} handler={handlePersonalFields} />
                    </Grid>
                    <Grid>
                        <Typography gutterBottom variant="h5" color="primary" sx={{marginLeft: '0',marginTop: '40px'}}>
                            Work Experience
                        </Typography>
                    </Grid>
                    <Grid item>
                        <WorkExp fieldValues={work} handler={handleWorkFields} deleteWorkHandler={handleWorkDelete}/>
                    </Grid>
                    <Grid item>
                        <Button fullWidth onClick={this.addHandler} id="work" variant="contained" size="large" sx={{ m: 1 }}>Add</Button>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h5" color="primary" sx={{paddingLeft: '0', marginTop: '40px'}}>
                            Education Experience
                        </Typography>
                    </Grid>
                    <Grid item>
                        <EducationExp fieldValues={education} handler={handleEducationFields} deleteEducationHandler={handleEducationDelete}/>
                    </Grid>
                    <Grid item>
                        <Button fullWidth onClick={this.addHandler} id="education" variant="contained" size="large" sx={{ m: 1}}>Add</Button>
                    </Grid>
                </Grid>
            </Paper>);
    }
}


export default Userform