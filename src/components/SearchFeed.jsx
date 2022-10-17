import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
    const {searchTerm} =useParams()
    console.log(searchTerm)
    const [videos, setvideos] = useState([]);
    
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
            (data) => {
                setvideos(data.items);
            }
        );
    }, []);

    return (
        <Box p={2} sx={{ overflowy: "auto", height: "90vh", flex: "2" }}>
            <Typography variant="h4" fontWeight="bold" mb={2} color="#003366">
                Search Results for : <span></span>
                <span style={{ color: "#003366" }}>{searchTerm} </span> Videos
            </Typography>           
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
