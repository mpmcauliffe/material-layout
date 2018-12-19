import React from 'react'
import { Button, Grid, Paper } from '@material-ui/core'


const ActionBar = ({ events }) => {
    return (
        <Paper square={true} elevation={0}>
            <div style={{ 
                    height: '45.85vh',
                    width: '100%',
                    padding: 6,
                    //backgroundColor: '#fdebe4',
                    backgroundColor: '#efdcd5'
                }}
            >
                <h2 style={{ margin: 0, fontStyle: 'bold', marginBottom: 2 }}>Events</h2>
                <div style={{ padding: 13 }}>
                    <Grid container>
                        {events.map(event => 
                            <Grid 
                                item 
                                xs={12} 
                                md={3} 
                                key={event.id}
                            >
                                <h3 style={{ marginTop: 0, marginBottom: 15 }}>{event.book}</h3>
                                <h4 style={{ marginTop: 0, marginBottom: 0 }}>{event.location}</h4>
                                <h4 style={{ marginTop: 0, marginBottom: 0 }}>{event.time}</h4>
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
                    <Button 
                        variant="outlined"
                        style={{ float: 'right', marginTop: 30 }}
                    >
                        Add Event
                    </Button>    
                </div>
            </div>
        </Paper>
    )
}

export { ActionBar }
