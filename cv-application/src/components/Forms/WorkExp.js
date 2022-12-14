import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Component } from "react";


class WorkExp extends Component{
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
                <Grid container spacing={1} columnSpacing={{xs:2}}>
                    <Grid item xs={12}>
                        <TextField fullWidth autoComplete="off" value={this.props.position} name="position" onChange={this.handleChange} label="Position" sx={{ m: 1 }} color="secondary" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth autoComplete="off" value={this.props.company} name="company" onChange={this.handleChange} label="Company" sx={{ m: 1 }} color="secondary" size="small" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth autoComplete="off" value={this.props.city} name="city" onChange={this.handleChange} label="City" sx={{ m: 1 }}  color="secondary" size="small" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth autoComplete="off" value={this.props.workStart} name="workStart" onChange={this.handleChange} label="Start Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth autoComplete="off" value={this.props.workEnd} name="workEnd" onChange={this.handleChange} label="End Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" size="large" sx={{ m: 1 }}>Delete</Button>
                    </Grid>
        
                </Grid>
            </Box>
          ); 
    }
}



export default WorkExp