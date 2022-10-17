import React from 'react'
import { Box, CardContent,CardMedia,Typography } from '@mui/material'
import {  CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'
const ChannelCard = ({channelDetail ,marginTop}) =>  

   (
   <Box    
   sx={{boxShadow:'none',
   borderRadius:'20px',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   width:{xs:'356px',md:'320px'},
   height:'326px',
   margin:'auto',
   marginTop}}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent
    sx={{display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
    color:'#003366'}}>
        {console.log(channelDetail)}
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{borderRadius:'50%',height:'180px', width:'180px',mb:2, border:'1px solid #003366'}}/>
        <Typography variant='h6'>
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{fontsize:14, color:'gray',ml:'5px'}} />
        </Typography>
            {channelDetail?.statistics?.subscriberCount && (
        <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
        </Typography>
            )}
        
    </CardContent>
    </Link>
   </Box>
  )

export default ChannelCard