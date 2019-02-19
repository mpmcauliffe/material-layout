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
                        <Grid columns={2}>
                            <Grid.Column width={13}>
                                <Carousel isEvent={true} />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <CreateButton style={{ marginBottom: 10, }}>Create New Event</CreateButton>
                                <CreateButton>Find Event Questions</CreateButton>
                            </Grid.Column>
                        </Grid>
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