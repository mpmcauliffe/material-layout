import React, { Fragment } from 'react'
import { Grid, } from 'semantic-ui-react' 
import { 
    BookInfo, 
    Carousel, 
    EventInfo, 
    Slide, 
} from '../components'
import { 
    ActionBarCanvas,
    BookCover,
    CreateButton,
    SectionHeader,
    Sidescroll,
} from '../../assets/styles/components'


const ActionBar = () => {

    return (
            <ActionBarCanvas>
                {window.innerWidth > 480
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
                        <SectionHeader>Events</SectionHeader>
                        <Sidescroll style={{ height: '85vh', marginTop: '29px', }}>
                               
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