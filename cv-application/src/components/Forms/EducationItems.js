import { Grid, TextField, Button} from "@mui/material";

const EducationItems = (props) => {
    
return (
<Grid container spacing={1}>
    <Grid item xs={12}>
        <TextField fullWidth label="Institution Name" value={props.institute} onChange={props.handleChange} name="institute" sx={{ m: 1 }} color="secondary" size="small"/>
    </Grid>
    <Grid item xs={12}>
        <TextField fullWidth label="City" value={props.city} onChange={props.handleChange} name="city"  sx={{ m: 1 }} color="secondary" size="small"/>
    </Grid>
    <Grid item xs={12}>
        <TextField fullWidth label="Degree" value={props.degree} onChange={props.handleChange} name="degree" sx={{ m: 1 }} color="secondary" size="small" />
    </Grid>
    <Grid item xs={6}>
        <TextField fullWidth label="Start Date" value={props.educationStart} onChange={props.handleChange} name="educationStart" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
    </Grid>
    <Grid item xs={6}>
        <TextField fullWidth label="End Date" value={props.educationEnd} onChange={props.handleChange} name="educationEnd" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
    </Grid>
    <Grid item xs={12}>
        <Button fullWidth variant="contained" onClick={props.deleteHandler} id={props.id} size="large" sx={{ m: 1 }}>Delete</Button>
    </Grid>
</Grid>

);
   

}
export default EducationItems