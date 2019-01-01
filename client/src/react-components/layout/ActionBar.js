import React from 'react'
import { 
    Grid, 
    IconButton,
    Paper, 
    Tabs, 
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Slide } from '../components'
import { 
    Carousel,
    Content,
    IconButtonContainer,
    ActionBarCanvas,
    SectionHeader,
} from '../../assets/themes/styles'


const ActionBar = ({ events, handleValueChange, value }) => {

    return (
        <Paper square={true} elevation={0}>
            <ActionBarCanvas>

                <IconButtonContainer>
                    <IconButton>
                        <Add fontSize='default' />
                    </IconButton>    
                </IconButtonContainer>
                
                <SectionHeader>Events</SectionHeader>

                <Content>
                    <Grid container>
                        <Carousel>
                            <Tabs
                                value={value}
                                onChange={handleValueChange}
                                scrollButtons='auto'
                                indicatorColor='primary'
                                scrollable
                            >
                                {events.map((event, index) => 
                                    <Slide
                                        key={event.id}
                                        number={index}
                                        information={event}
                                        isEvent={true}  
                                    />
                                )}
                            </Tabs>
                        </Carousel>
                    </Grid>
                </Content>
            </ActionBarCanvas>
        </Paper>
    )
}

export { ActionBar }
