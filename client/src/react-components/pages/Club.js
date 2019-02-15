import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Responsive, } from 'semantic-ui-react'
import { Aside, Navbar, } from '../layout'
//import { Aside, } from '../layout/Aside'
import { Carousel, MeetingDetails, } from '../components'
import { 
    ActionBarCanvas, 
    LibraryCanvas,
    SectionHeader,
} from '../../assets/styles/components'


class Club extends React.Component {

    state = {
        club: {}
    }

    componentWillMount = () => {
        const sortedClub = this.props.club

        // now sort members alphabetically by name
        sortedClub.members.sort( this.compareMembers )

        // then sort events in reverse chronological order
        sortedClub.events.sort( this.compareEvents )

        // then set the state
        this.setState({ club: sortedClub})
    }

    // sort members alphabetically
    compareMembers = ( mem1, mem2 ) => {
        if ( mem1.name < mem2.name )
            return -1

        if ( mem1.name > mem2.name )
            return 1

    return 0
    }

    // sort events in reverse chronological order
    compareEvents = ( event1, event2 ) => {
        if ( event1.date < event2.date )
            return 1

        if ( event1.date > event2.date )
            return -1

        return 0
    }

    onCreateMeetingClose = ( updatedClub ) => {
        this.setState({ club: updatedClub })
    }

    render() {
        const title = `Club Details for ${this.state.club.clubname}`
        return (
            <Fragment>
                <Navbar 
                    page={title} 
                    header={true}
                />

                <Grid>
                    <Grid.Column 
                        width={4}
                        as={Responsive}
                        minWidth={980}
                        style={{ paddingRight: 0 }}
                    >
                        <Aside 
                            club={this.state.club}
                            profile={false}
                        />
                    </Grid.Column>
                    

                    <Grid.Column 
                        computer={12}
                        tablet={16} 
                        mobile={16}
                        style={{ paddingLeft: 0, paddingRight: 0, }}
                    >
                        <ActionBarCanvas>
                            <SectionHeader>Events</SectionHeader>
                        </ActionBarCanvas>
                        <LibraryCanvas>
                            <SectionHeader>Library</SectionHeader>
                            <Carousel />
                        </LibraryCanvas>
                    </Grid.Column>
                </Grid>
                <Navbar page={title}/>
            </Fragment>
        )
    }
}

Club.propTypes = {
    user: PropTypes.shape({
        firstname:  PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }),

    club: PropTypes.shape({
        clubname:  PropTypes.string.isRequired
    })
}


export { Club }


/*
{ this.state.club.members.map( member => (
                            <h5>{member.name}</h5>
                        )) }

<h4>Meetings:</h4>

                        { this.state.club.events.map( meeting => (
                            <h5>{meeting.date.slice(0,10)}: {meeting.book}</h5>
                        )) }

                        <MeetingDetails className='sidebar__button'
                                        user={this.props.user}
                                        club={this.state.club} 
                                        onClose={this.onCreateMeetingClose} />
*/