import React from 'react'
import { Grid } from '@material-ui/core'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ActionBar from './ActionBar'
import LibraryBar from './LibraryBar'


const LayoutPrime = () => 
    <div>
        <Navbar />

        <Grid container>
            <Grid item md={3}>
                <Sidebar />
            </Grid>
            <Grid item md={9} sm={12}>
                <Grid item md={12}>
                    <ActionBar />
                </Grid>
                <Grid item md={12}>
                    <LibraryBar />
                </Grid>
            </Grid>
        </Grid>        
    </div>


export default LayoutPrime    
