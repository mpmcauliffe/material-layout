import React, { Fragment } from 'react'
import { Grid, } from 'semantic-ui-react' 
import { 
    Carousel, 
    Slide, 
} from '../components'
import { 
    ActionBarCanvas,
    CreateButton,
    IconButton,
    IconButtonContainer,
    SectionHeader,
    Sidescroll,
} from '../../assets/styles/components'
import { events } from '../../assets/store/store'


const ActionBar = () => {

    return (
            <ActionBarCanvas>
                {window.innerWidth > 768
                    ?
                    <Fragment>
                        <SectionHeader>Events</SectionHeader>
                        <Carousel isEvent={true} />
                        <div style={{ marginTop: '9vh' }}>
                            <CreateButton style={{ marginright: '2vw' }}>Create New Event</CreateButton>
                            <CreateButton>Find Event Questions</CreateButton>
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <IconButtonContainer>
                            <IconButton icon='add' />
                        </IconButtonContainer>
                        <SectionHeader>Events</SectionHeader>
                        <Sidescroll style={{ height: '80vh', marginTop: '29px', }}>
                            {events.map(event =>
                                <Slide
                                    key={event.id}
                                    number={event.number}
                                    information={event}
                                    isEvent={true}
                                />
                            )}
                        </Sidescroll>            
                    </Fragment>                        
                }                        
            </ActionBarCanvas>
    )
}

export { ActionBar }


/*
                            <Content>
                                <Grid container>
                                    <Carousel>
                                        {events.map((event, index) => 
                                            <Slide
                                                key={event.id}
                                                number={index}
                                                information={event}
                                                isEvent={true}  
                                            />
                                        )}
                                    </Carousel>
                                </Grid>
                            </Content>
*/