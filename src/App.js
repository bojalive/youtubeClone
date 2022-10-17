import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import {Feed, SearchFeed, VideoDetail, ChannelDetail,Navbar} from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Box ssx={{ bgcolor: 'Black'}}>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Feed/>}></Route>
            <Route path='/video/:id' element={<VideoDetail/>}></Route>
            <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}></Route>
        </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App