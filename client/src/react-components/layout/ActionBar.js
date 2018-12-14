import React from 'react'
import { Button, Grid, Paper } from '@material-ui/core'


const ActionBar = ({ events }) => {
    //const { id, book, location, time } = events

    return (
        <Paper square={true} elevation={0}>
            <div style={{ 
                    height: '31.3vh',
                    width: '100%',
                    padding: 6,
                    //backgroundColor: '#fdebe4',
                    backgroundColor: '#efdcd5'
                }}
            >
                <h2 style={{ margin: 0, fontStyle: 'bold' }}>Events</h2>
                <div style={{ padding: 13 }}>
                    <Grid container>
                        {events.map(event => 
                            <Grid 
                                item 
                                xs={12} 
                                md={3} 
                                key={event.id}
                            >
                                <h3>{event.book}</h3>
                                <h4>{event.location}</h4>
                                <h4>{event.time}</h4>
                                <Button
                                    variant='outlined'
                                    mini={true}
                                    style={{ border: 'none' }}
                                >
                                    edit
                                </Button>
                            </Grid>
                        )}
                        <Button 
                            variant="outlined"
                            style={{ marginTop: '12vh' }}
                        >
                            Add Event
                        </Button>    
                    </Grid>
                </div>
            </div>
        </Paper>
    )
}

export { ActionBar }
