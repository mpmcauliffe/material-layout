import React from 'react'
import { Grid } from '@material-ui/core'
import {
    ActionBar,
    LibraryBar,
    Navbar,
    Sidebar,
} from './layout'
import { members } from '../store/store'


const LayoutPrime = () => 
    <div>
        <Navbar />

        <Grid container>
            <Grid item md={3} sm={12}>
                <Sidebar 
                    members={members}
                />
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
