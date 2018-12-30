import React from 'react'
import { 
    Grid, 
    IconButton,
    Paper, 
    Tabs, 
} from '@material-ui/core'
import { Edit, Add } from '@material-ui/icons'
import { Slide } from '../components'
import { carousel, frame } from '../../assets/themes/styles'
import { truncate } from '../../assets/javascript'

/**
 * 
 * id: 47878,
        title: 'Oliver Twist',
        location: 'Castle Grayskull',
        time: '01/23/2019 7:00pm'
 */
const ActionBar = ({ events, handleValueChange, value }) => {
    //const { id, location, time, title } = events

    return (
        <Paper square={true} elevation={0}>
            <div style={frame.actionbar}>
                <IconButton 
                    //color='primary.dark'
                    style={{ float: 'right', opacity: .5 }}
                >
                    <Add fontSize='default' />
                </IconButton>    
                <h2 style={frame.header}>Events</h2>
                <div style={{ padding: 13 }}>
                    <Grid container>
                        <div style={carousel.container}>
                            <Tabs
                                value={value}
                                onChange={handleValueChange}
                                //indicatorColor='secondary'
                                //color='secondary'
                                scrollButtons='auto'
                                scrollable
                            >
                                {events.map((event, index) => 
                                    <Slide
                                        key={event.id}
                                        number={index}
                                        title={event.title}
                                        information={[event.location, event.time]}  
                                        event={true}  
                                    />
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


/**
 <div key={event.id} style={{ marginLeft: '50px', marginRight: '50px', }}>
                                            <h3 style={frame.infoText}><em>{truncate(event.book, 25)}</em></h3>
                                            <div style={{ marginTop: '2rem' }}>
                                                <h4 style={frame.smallText}>{truncate(event.location, 23)}</h4>
                                                <h4 style={frame.smallText}>{event.time}</h4>
                                            </div>
                                            <IconButton
                                                //color='primary.dark'
                                                variant='outlined'
                                                style={{ opacity: .5, marginTop: 10 }}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </div>
 */