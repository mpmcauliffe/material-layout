import React, { Fragment } from 'react'
import { Grid, } from 'semantic-ui-react' 
import { Carousel, Slide, } from '../components'
import { 
    ActionBarCanvas,
    Content,
    SectionHeader,
} from '../../assets/styles/components'
import { CreateButton, } from '../../assets/styles/components/general'
import { events } from '../../assets/store/store'

const ActionBar = () => {

    return (
            <ActionBarCanvas>
                {window.innerWidth > 480
                    ?
                    <Fragment>
                        <SectionHeader>Events</SectionHeader>
                        <Grid columns={2}>
                            <Grid.Column width={13}>
                                <Carousel />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <CreateButton>Create New Event</CreateButton>
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