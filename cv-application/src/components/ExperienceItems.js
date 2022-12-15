import { Grid, TextField, Button} from "@mui/material";

const ExperienceItems = (props) => {
    return (
        <Grid container spacing={1} columnSpacing={{xs:2}}>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={props.position} name="position" onChange={props.handleChange} label="Position" sx={{ m: 1 }} color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={props.company} name="company" onChange={props.handleChange} label="Company" sx={{ m: 1 }} color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={props.city} name="city" onChange={props.handleChange} label="City" sx={{ m: 1 }}  color="secondary" size="small" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth autoComplete="off" value={props.workStart} name="workStart" onChange={props.handleChange} label="Start Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth autoComplete="off" value={props.workEnd} name="workEnd" onChange={props.handleChange} label="End Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={props.handleDelete} id={props.id}size="large" sx={{ m: 1 }}>Delete</Button>
            </Grid>

    </Grid>
    );
}
export default ExperienceItems