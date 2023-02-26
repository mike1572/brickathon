import {
    Grid, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem
} from '@mui/material'


export default function Question2 ({label, value, options, handleChange}) {

    return (
        <Grid item xs={10} sm={10} md={10} lg={10}>
            <FormControl required fullWidth={{sm: true, md: true, lg: false}}>
                <InputLabel>{label}</InputLabel>
                <Select                                    
                    value={value}
                    label={label}
                    onChange={handleChange}
                    //sx={{width: {lg: 600, md: 450}}}
                >
                {
                    options.map((option, i) => (
                        <MenuItem  key={i} value={option}>{option}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
        </Grid>
    )
}