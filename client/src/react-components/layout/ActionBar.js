import React from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import { frame } from '../../themes/styles'


const ActionBar = ({ events }) => {
    return (
        <Paper square={true} elevation={0}>
            <div style={frame.actionbar}>
                <Button 
                    variant="outlined"
                    style={{ float: 'right' }}
                >
                    Add Event
                </Button>    
                <h2 style={frame.header}>Events</h2>
                <div style={{ padding: 13 }}>
                    <Grid container>
                        {events.map(event => 
                            <Grid 
                                item 
                                xs={12} 
                                md={3} 
                                key={event.id}
                            >
                                <h3 style={frame.infoText}><em>{event.book}</em></h3>
                                <div style={{ marginTop: '2rem' }}>
                                    <h4 style={frame.smallText}>{event.location}</h4>
                                    <h4 style={frame.smallText}>{event.time}</h4>
                                </div>
                                <Button
                                    variant='outlined'
                                    //mini={true}
                                    style={{ opacity: .5, marginTop: 15 }}
                                >
                                    edit
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </div>
        </Paper>
    )
}

export { ActionBar }
