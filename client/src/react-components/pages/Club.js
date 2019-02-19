import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Tab, } from 'semantic-ui-react'
import { Aside, Navbar, } from '../layout'
import { Carousel, MeetingDetails, Slide } from '../components'
import { 
    ActionBarCanvas, 
    Content,
    LibraryCanvas,
    SectionHeader,
    Sidescroll,
} from '../../assets/styles/components'
import { Drawer } from '../../assets/styles/components/sidebar'
import { Backdrop, } from '../components/Backdrop'
import { bookList } from '../../assets/store/store'
import { alphabetize } from '../../assets/javascript'


class Club extends React.Component {

    state = {
        club: {},
        sidebarVisible: window.innerWidth < 769 ? false : true,
        height: window.innerHeight, 
        width: window.innerWidth,
    }

    componentWillMount = () => {
        const sortedClub = this.props.club

        // now sort members alphabetically by name
        sortedClub.members.sort( this.compareMembers )

        // then sort events in reverse chronological order
        sortedClub.events.sort( this.compareEvents )

        // then set the state
        this.setState({ club: sortedClub })

        window.removeEventListener('resize', this.updateDimensions)    
        
        // if(window.innerWidth < 769) {
        //     this.setState({
        //         sidebarVisible: false,
        //     })
        // }
    }
    componentDidMount() { 
        window.addEventListener('resize', this.updateDimensions)    
    }
    updateDimensions = () => {
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth,
        })
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

    sidebarToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sidebarVisible: !prevState.sidebarVisible,
            }
        })
    }

    backdropClickHandler = () => {
        this.setState({
            sidebarVisible: false,
        })
    }


    render() {
        const title = `Club Details for ${this.state.club.clubname}`
        const { sidebarVisible } = this.state
        let backdrop

        const panes = [
            { 
                menuItem: 'Events', 
                render: () =>   <Tab.Pane style={{ padding: 0 }}>
                                    <ActionBarCanvas>
                                        <SectionHeader>Events</SectionHeader>
                                    </ActionBarCanvas>
                                </Tab.Pane>, 
            }, { 
                menuItem: 'Library', 
                render: () =>   <Tab.Pane style={{ padding: 0 }}>
                                        <LibraryCanvas>
                                            <SectionHeader>Library</SectionHeader>
                                        
                                            <Sidescroll style={{ height: '85vh' }}>
                                                {alphabetize(bookList).map(book =>
                                                    <Slide
                                                        key={book.number}
                                                        number={book.number}
                                                        information={book}
                                                        isEvent={false}
                                                    />
                                                )}
                                            </Sidescroll>
                                        </LibraryCanvas>
                                </Tab.Pane>,
            },
        ]

        if(sidebarVisible && window.innerWidth < 769) 
            backdrop = <Backdrop click={this.backdropClickHandler} />
        
        return (
            <Fragment>
                <Navbar 
                    page={title} 
                    header={true}
                    sidebarClickHandler={this.sidebarToggleClickHandler}
                />
                {backdrop}
                <Grid columns={2}>
                    <Grid.Row>
                        <Fragment>
                            {window.innerWidth > 890
                                ?
                                    <Grid.Column 
                                        width={4}
                                        style={{ paddingRight: 0 }}
                                    >
                                        <Aside 
                                            club={this.state.club}
                                            profile={false}
                                        />
                                    </Grid.Column>
                                :
                                    <Fragment>
                                        <Drawer 
                                            show={sidebarVisible ? 'translateX(0)' : 'translateX(-100%)'}
                                        >
                                            <Aside 
                                                club={this.state.club}
                                                profile={false}
                                            />
                                        </Drawer>
                                    </Fragment>
                            }
                        </Fragment>

                        <Fragment>
                            {window.innerWidth > 480
                                ?
                                    <Grid.Column 
                                        computer={12}
                                        tablet={16} 
                                        mobile={16}
                                        style={{ paddingLeft: 0, paddingRight: 0, }}
                                    >
                                        <ActionBarCanvas>
                                            <SectionHeader>Events</SectionHeader>
                                            <Grid columns={2}>
                                                <Grid.Column width={13}>
                                                    
                                                </Grid.Column>
                                                <Grid.Column width={3}>

                                                </Grid.Column>
                                            </Grid>
                                        </ActionBarCanvas>
                                        <LibraryCanvas>
                                            <SectionHeader>Library</SectionHeader>
                                            <Carousel 
                                                isEvent={false}
                                            />
                                        </LibraryCanvas>
                                    </Grid.Column>
                                :
                                    <Tab 
                                        panes={panes} 
                                        grid={{ paneWidth: 16, tabWidth: 8 }}  
                                    />
                            }
                        </Fragment>
                        
                    </Grid.Row>
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

                        <div 
                                            style={{
                                                height: 240,
                                                background: '#3d3d4f',
                                                opacity: .3,
                                            }}
                                        />

                                                                                <div 
                                            style={{
                                                height: 240,
                                                background: '#4f3d3d',
                                                opacity: .3,
                                            }}
                                        />

<h4>Meetings:</h4>

                        { this.state.club.events.map( meeting => (
                            <h5>{meeting.date.slice(0,10)}: {meeting.book}</h5>
                        )) }

                        <MeetingDetails className='sidebar__button'
                                        user={this.props.user}
                                        club={this.state.club} 
                                        onClose={this.onCreateMeetingClose} />
*/