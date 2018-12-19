import React from 'react'
import { Grid } from '@material-ui/core'
import {
    ActionBar,
    Library,
    Navbar,
    Sidebar,
} from './layout'
import { books, events, members } from '../store/store'


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
                    <ActionBar 
                        events={events}
                    />
                </Grid>
                <Grid item md={12}>
                    <Library />
                </Grid>
            </Grid>
        </Grid>        
    </div>


export default LayoutPrime    
