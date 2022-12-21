import { Grid, TextField, Button} from "@mui/material";

const ExperienceItems = (props) => {
    const {id,position,company,city,workStart,workEnd} = props;
    return (
        <Grid container spacing={1} columnSpacing={{xs:2}}>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={position} name="position" onChange={(e)=>props.handleChange(e, id)} label="Position" sx={{ m: 1 }} color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={company} name="company" onChange={(e)=>props.handleChange(e, id)} label="Company" sx={{ m: 1 }} color="secondary" size="small" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth autoComplete="off" value={city} name="city" onChange={(e)=>props.handleChange(e, id)} label="City" sx={{ m: 1 }}  color="secondary" size="small" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth autoComplete="off" value={workStart} name="workStart" onChange={(e)=>props.handleChange(e, id)} label="Start Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth autoComplete="off" value={workEnd} name="workEnd" onChange={(e)=>props.handleChange(e, id)} label="End Date" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant="contained" onClick={(e) => props.handleDelete(id)} size="large" sx={{ m: 1 }}>Delete</Button>
            </Grid>

    </Grid>
    );
}
export default ExperienceItems