
import { useState } from "react";

import {
    Paper,
    Grid,
    Typography,
    Input,
    InputLabel,
    Box,
    FormControl,
    MenuItem,
    Select,
    Button,
    IconButton
} from "@mui/material";

import ImageIcon from '@mui/icons-material/Image';
import DownloadIcon from '@mui/icons-material/Download';
import people from './images/people.png'
import Question from "./Question";

export default function Home () {

    let imageHeight=450

    const [gender, setGender] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [hairColor, setHairColor] = useState('')
    //const [hairType, setHairType] = useState('')
    const [age, setAge] = useState('')
    //const [eyeColor, setEyeColor] = useState('')
    //const [faceTypes, setFaceTypes] = useState('')
    //const [bodyType, setBodyType] = useState('')
    const [facialHair, setFacialHair] = useState('')
    //const [eyeBrows, setEyeBrows] = useState('')
    const [glasses, setGlasses] = useState('')
    const [earrings, setEarrings] = useState('')
    const [tattoos, setTatoos] = useState('')
    const [backLighting, setBackLighting] = useState('')
    const [timeOfDay, setTimeOfDay] = useState('')
    const [locations, setLocations] = useState('')
    const [productType, setProductType] = useState('')


    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            gender, ethnicity, hairColor, age, facialHair, glasses, earrings, tattoos, backLighting, timeOfDay, locations, productType
        )
    }

    return (
        <Paper sx={{mx: 5, pb: 5, overflowX: 'hidden', mt: {xs: 5, md: 2}, mb: 5}} elevation={5}>
            <Grid container>

                <Grid item xs={12} order={{ xs: 1, md: 1 }}>
                    <Typography variant="h6" sx={{mt: 5, mx: {xs: 5, md: 30}, fontWeight: 800, textAlign: 'center', mb: {xs: 5, md: 3}, textTransform: 'uppercase'}}>
                        Revolutionize your brand's marketing campaigns with AI-generated images that capture the essence of your brand identity.
                    </Typography>
                </Grid>
            

                <Grid item container xs={12} md={6} lg={8} order={{ xs: 3, md: 2 }} justifyContent="center" alignItems="center" >
         
                    <form onSubmit={handleSubmit}>
                 
                        <Grid container item spacing={1} lg={12} display="flex" flexDirection='row' justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={10} md={10} lg={12}>
                                <Typography variant="body1" sx={{textAlign: 'left', fontWeight: 800, mb: 1, mt: 1}}>
                                    Physical Description
                                </Typography>
                            </Grid>

                            <Question label='Gender' value={gender} options={['Male', 'Female']} handleChange={(e) => setGender(e.target.value)}/>
                            <Question label='Ethnicity' value={ethnicity} options={['White', 'African American', 'Hispanic', 'Asian', 'Pacific Islander', 'East European']} handleChange={(e) => setEthnicity(e.target.value)}/>
                            <Question label='Hair Color' value={hairColor} options={['Black', 'Brown', 'Blonde', 'Red']} handleChange={(e) => setHairColor(e.target.value)}/>
                            <Question label="Age" value={age} options={['18 year old', '25 year old', '30-40 year old', '50 year old', '80 year old']} handleChange={(e) => setAge(e.target.value)}/>
                            <Question label="Facial Hair" value={facialHair} options={['Beard', 'Mustache', 'Goatee', 'No facial hair']} handleChange={(e) => setFacialHair(e.target.value)}/>

                        </Grid>

                        <Grid container spacing={1} >
                            <Grid item container spacing={1} lg={6} justifyContent="center" alignItems="center">

                                <Grid item xs={10} sm={10} md={10} lg={12}>
                                    <Typography variant="body1" sx={{textAlign: 'left', fontWeight: 800, mb: 1, mt: 1}}>
                                     Accessories
                                    </Typography>
                                </Grid>

                                <Question label="Glasses" value={glasses} options={['Rounded', 'Square', 'Sunglasses', 'No']} handleChange={(e) => setGlasses(e.target.value)}/>
                                <Question label="Earrings" value={earrings} options={['Studs', 'Chandelier', 'Ear cuffs', 'No']} handleChange={(e) => setEarrings(e.target.value)}/>
                                <Question label="Tattoos" value={tattoos} options={['Fullbody', 'Neck', 'Arm', 'Wrist']} handleChange={(e) => setTatoos(e.target.value)}/>

                            </Grid>
                          
                            <Grid item container spacing={1} lg={6} justifyContent="center" alignItems="center">

                                <Grid item xs={10} sm={10} md={10} lg={12}>
                                    <Typography variant="body1" sx={{textAlign: 'left', fontWeight: 800, mb: 1, mt: 1}}>
                                        Backgrounds/Environment
                                    </Typography>
                                </Grid>

                                <Question label="Lighting" value={backLighting} options={['Night', 'Day']} handleChange={(e) => setBackLighting(e.target.value)}/>
                                <Question label="Locations" value={locations} options={['Beach', 'Forest', 'Office', 'Pub']} handleChange={(e) => setLocations(e.target.value)}/>
                                <Question label="Time of Day" value={timeOfDay} options={['Morning', 'Afternoon', 'Evening', 'Sunset', 'Night']} handleChange={(e) => setTimeOfDay(e.target.value)}/>

                            </Grid>

                        </Grid>

                        
                        
                      
        
                        <Grid container item spacing={1} lg={12} justifyContent="center" alignItems="center">
                         
                            <Grid item xs={10} sm={10} md={10} lg={12}>
                                <Typography variant="body1" sx={{textAlign: 'left', fontWeight: 800, mb: 1, mt: 1}}>
                                    Products
                                </Typography>
                            </Grid>

                            <Question label="Types" value={productType} options={['Wine', 'Beer', 'Spirits']} handleChange={(e) => setProductType(e.target.value)}/>
                        </Grid>

                        <Grid container item display='flex' justifyContent='center' flexDirection='column' alignItems="center" sx={{mt: 3}}>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit" sx={{textAlign: 'center'}}>Generate</Button>
                            </Grid>
                        </Grid>

                    </form>
                </Grid>

                <Grid item xs={12} md={6} lg={3} order={{ xs: 2, md: 3 }}
                    sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
                >
                    <Typography variant="body1" sx={{my: {xs: 3}}} >
                        Your image will appear here
                    </Typography>

                    <img src={people} style={{height: imageHeight, width: imageHeight, borderRadius: 10}} />
                    {/* <ImageIcon sx={{
                 
                        height: imageHeight, width: imageHeight,
                    }} /> */}

                    <IconButton sx={{mt: 3}}>
                        <DownloadIcon sx={{height: 55, width: 55}}/>
                    </IconButton>
                    
                </Grid>
            </Grid>
        </Paper>
    )
}