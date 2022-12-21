import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material"
import { Component } from "react";

class Personal extends Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.handler(event.target.name,event.target.value)
    }
    render(){
        return(
            <Box component="form">
                    <Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.firstName} name="firstName" onChange={this.handleChange} label="First Name" sx={{ m: 1 }} color="secondary" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.lastName} name="lastName" onChange={this.handleChange} label="Last Name" sx={{ m: 1 }} color="secondary" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.title} name="title" onChange={this.handleChange} label="Title" sx={{ m: 1 }}  color="secondary" size="small"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.address} name="address" onChange={this.handleChange} label="Address" sx={{ m: 1 }}  color="secondary"  size="small"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.email} name="email" onChange={this.handleChange} label="Email" type="email" sx={{ m: 1 }}  color="secondary" size="small"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth autoComplete="off" value={this.props.number} name="number" onChange={this.handleChange}  label="Phone" type="number" sx={{ m: 1 }}  color="secondary" size="small" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth value={this.props.description} name="description" onChange={this.handleChange} label="Description" multiline rows={3} sx={{ m: 1 }}  color="secondary" size="small" />
                        </Grid>
                    </Grid>
                            
            </Box>
           ); 
    }
}

export default Personal