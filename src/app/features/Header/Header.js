import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../app/redditSlice';
import './Header.css';
// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RedditIcon from '@mui/icons-material/Reddit';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function Header() {

    //Local State
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

  return(
      <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='secondary'>
                <Toolbar>
                <RedditIcon fontSize="large" sx={{ marginRight: 2 }} />
                    <Typography variant='h6' component="div" sx={{ flexGrow: 1, display: {sm: "block"}, marginRight: 1 }} >
                        Reddit Searcher
                    </Typography>

                    {/* <SearchIcon fontSize="large" sx={{ marginRight: 2 }} />
                    <TextField id="outlined-basic" label="Search" variant="outlined" /> */}

                    <TextField id='outlined-basic' label='Search' size='small' sx={{ width: '35%' }} onChange={onSearchTermChange} />
                    <button type='submit' onClick={onSearchTermSubmit}>
                        <SearchIcon  />
                    </button>
                </Toolbar>
            </AppBar>
        </Box>
        
        {/* Testing
        <div>{ searchTermLocal }</div>
        <br />
        <div>{ searchTerm }</div> 
        */}
      </div>
  );
}

