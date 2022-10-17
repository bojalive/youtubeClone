import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from "../utils/Constants";
const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card sx={{
            width:{xs:'100%',sm:'358px',md:'320px'},
            boxShadow:'none',borderRadius:0
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {
                        xs:'100%',
                        sm:'358px',
                        md:'320px'
                    }, height: 180 }}
                ></CardMedia>
            </Link>
            <CardContent sx={{ backgroundColor: "#003366", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1"
                    fontWeight='bold'
                    color='#FFF'>
                    {snippet?.title.slice(0,60)||
                    demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelTitle}>
                    <Typography variant="subtitle1"
                    fontWeight='bold'
                    color='#FFF'>
                    {snippet?.channelTitle||
                    demoChannelTitle}
                    <CheckCircle sx={{fontsize:12, color:'gray',ml:'5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
