import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
const  [selectedCategory, setselectedCategory] = useState('New');
const [videos, setvideos] = useState([])

 useEffect(() => {   

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>{setvideos(data.items)});       
        }, [selectedCategory]);
    
    return (
        <Stack 
            sx={{
                flexDirection: { sx: "column", md: "row" },
            }}
        >
            <Box
                sx={{
                    height: {
                        sx: "auto",
                        mx: "92vh",
                    },

                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <SideBar selectedCategory={selectedCategory} 
                setselectedCategory={setselectedCategory} />

                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mr: 1.5, color: "#fff" }}
                >
                    Copyright 2022 Schlumberger
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowy: "auto", height: "90vh", flex: "2" }}>
                <Typography variant="h4" fontWeight="bold" mb={2} color="white">
                    {selectedCategory}
                    <span style={{ color: "#003366" }}>Videos</span>
                </Typography>
                {console.log(videos)}
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;
