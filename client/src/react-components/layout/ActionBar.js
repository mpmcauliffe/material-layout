import React from 'react'
import { 
    Button, 
    Grid, 
    Paper, 
    Tabs, 
} from '@material-ui/core'
import { carousel, frame } from '../../assets/themes/styles'


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
                        <div style={carousel.container}>
                            <Tabs
                            //style={carousel.carouselViewport}
                                //value={this.state.value} 
                                //onChange={this.handleChange}
                                indicatorColor='secondary'
                                textColor='secondary'
                                scrollButtons='auto'
                                scrollable
                            >
                                {events.map(event => 
                                    /*<Grid 
                                        item 
                                        xs={12} 
                                        md={3} 
                                        key={event.id}
                                    >*/
                                        <div style={{ width: 'px', marginLeft: '50px', marginRight: '50px', }}>
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
                                        </div>
                                )}
                            </Tabs>
                        </div>
                        
                    </Grid>
                </div>
            </div>
        </Paper>
    )
}

export { ActionBar }
