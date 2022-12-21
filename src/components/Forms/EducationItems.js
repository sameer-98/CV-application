import { Grid, TextField, Button} from "@mui/material";

const EducationItems = (props) => {
    
    const { id, institute, city, degree, educationStart, educationEnd } = props;

return (
<Grid container spacing={1}>
    <Grid item xs={12}>
        <TextField fullWidth label="Institution Name" value={institute} onChange={(e) => props.handleChange(e, id)} name="institute" sx={{ m: 1 }} color="secondary" size="small"/>
    </Grid>
    <Grid item xs={12}>
        <TextField fullWidth label="City" value={city} onChange={(e) => props.handleChange(e, id)} name="city"  sx={{ m: 1 }} color="secondary" size="small"/>
    </Grid>
    <Grid item xs={12}>
        <TextField fullWidth label="Degree" value={degree} onChange={(e) => props.handleChange(e, id)} name="degree" sx={{ m: 1 }} color="secondary" size="small" />
    </Grid>
    <Grid item xs={6}>
        <TextField fullWidth label="Start Date"  value={educationStart} onChange={(e) => props.handleChange(e, id)} name="educationStart" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
    </Grid>
    <Grid item xs={6}>
        <TextField fullWidth label="End Date"  value={educationEnd} onChange={(e) => props.handleChange(e, id)} name="educationEnd" InputLabelProps={{shrink: true,}} sx={{ m: 1 }} size="small" type='date' color="secondary" />
    </Grid>
    <Grid item xs={12}>
        <Button fullWidth variant="contained" onClick={(e) => props.deleteHandler(id)} size="large" sx={{ m: 1 }}>Delete</Button>
    </Grid>
</Grid>

);
   

}
export default EducationItems