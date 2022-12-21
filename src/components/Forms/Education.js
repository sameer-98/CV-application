import { Box } from "@mui/system";
import { Component } from "react";
import EducationItems from "./EducationItems";

class EducationExp extends Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleChange(event, id){
        this.props.handler(event.target.name,event.target.value, id)
    };

    handleDelete(id){
        this.props.deleteEducationHandler(id)
    }

    render(){
        return(
            <Box component="form" sx={{
                width: '100%'
            }}>
            {
                this.props.fieldValues.map(item => {
                    return <EducationItems 
                        key={item.id}
                        id={item.id}
                        institute={item.institute}
                        city={item.city}
                        degree={item.degree}
                        educationStart={item.educationStart}
                        educationEnd={item.educationEnd}
                        handleChange={this.handleChange}
                        deleteHandler={this.handleDelete}
                    />
                })
            }    
            </Box>
          ); 
    }
}


export default EducationExp;