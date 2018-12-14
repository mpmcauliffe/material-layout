import React from 'react'
import { Grid } from '@material-ui/core'
// import Navbar from './layout/Navbar'
// import Sidebar from './layout/Sidebar'
// import ActionBar from './layout/ActionBar'
// import LibraryBar from './layout/LibraryBar'

import {
    ActionBar,
    LibraryBar,
    Navbar,
    Sidebar,
} from './layout'


const LayoutPrime = () => 
    <div>
        <Navbar />

        <Grid container>
            <Grid item md={3} sm={12}>
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
