import React, { Component } from "react";
import { Paper, Grid, Typography } from "@mui/material";
import Header from "./CVPreview/header";
import WorkSection from "./CVPreview/Worklist";
import Qualifications from "./CVPreview/Qualifications";


class Preview extends Component{


    render(){
        const {personal, work, education} = this.props.prev
        return (<Paper elevation={3} sx={{ height: '50%', p:4  }}>
            <Grid>
                <Header personal={personal} />
            </Grid>
            <Grid sx={{
                mt: 2,
                mb: 2
            }}>
                <Typography variant="body1">
                        {personal.description}
                </Typography>
            </Grid>
            <Grid sx={{mb: 2}}>
                <WorkSection workList={work} />
            </Grid>
            <Grid>
                <Qualifications qualifications={education} />
            </Grid>
            
        </Paper>);
    }

}
export default Preview
