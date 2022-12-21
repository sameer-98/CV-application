import { Typography, Box, Table, TableRow, TableCell, TableBody } from "@mui/material";
import format from 'date-fns/format'


const dateConverter = (date) => {
    if(date !== ''){
        const newDate = format(new Date(date),"MMM, yyyy");
        return newDate
    }
}

const WorkSection = (props) => {
    const { workList } = props;
    return(
        <Box>
            <Typography variant="h6" sx={{
                textTransform: 'uppercase',
                 borderBottom:'2px solid',
                  borderColor: 'primary.main',
                  fontWeight: 'bold',
                  color:'primary.dark'}}>Work Experience
            </Typography>
            <Table >
                <TableBody>
                    {workList.map(item => (
                      <TableRow key={item.id}>
                        <TableCell sx={{width: 300}}>
                            <Typography variant="h6">
                                {dateConverter(item.workStart)} - {dateConverter(item.workEnd)}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="h6" sx={{mb: 1}}>{ item.position }</Typography>
                            <Typography variant="subtitle1" sx={{mb:2}}>{ item.company }, {item.city}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default WorkSection;