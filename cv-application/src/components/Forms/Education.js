import { Box } from "@mui/system";
import {TextField, Button} from "@mui/material";
import { Grid } from "@mui/material";
import { Component } from "react";

class EducationExp extends Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.handler(event.target.name,event.target.value)
    }
    render(){
        return(
            <Box component="form" sx={{
                width: 500,
                maxWidth: '100%',
                margin: '0 auto'
            }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Institution Name" value={this.props.institute} onChange={this.handleChange} name="institute" sx={{ m: 1 }} color="secondary" size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="City" value={this.props.city} onChange={this.handleChange} name="city"  sx={{ m: 1 }} color="secondary" size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Degree" value={this.props.degree} onChange={this.handleChange} name="degree" sx={{ m: 1 }} color="secondary" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Start Date" value={this.props.educationStart} onChange={this.handleChange} name="educationStart" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="End Date" value={this.props.educationEnd} onChange={this.handleChange} name="educationEnd" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" size="large" sx={{ m: 1 }}>Delete</Button>
                    </Grid>
                </Grid>
            </Box>
          ); 
    }
}


export default EducationExp;