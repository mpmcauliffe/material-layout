import React, { Fragment } from 'react'
import { Grid, } from 'semantic-ui-react' 
import { Carousel, Slide, } from '../components'
import { 
    ActionBarCanvas,
    Content,
    CreateButton,
    SectionHeader,
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
                    <Fragment></Fragment>                        
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