import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Tab, } from 'semantic-ui-react'
import { 
    ActionBar, 
    Aside, 
    Library, 
    Navbar, 
} from '../layout'
import { Backdrop, MeetingDetails, } from '../components'
import { Drawer } from '../../assets/styles/components/sidebar'


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
                render: () =>   <Tab.Pane style={{ padding: 0, }}>                   
                                    <ActionBar />
                                </Tab.Pane>, 
            }, { 
                menuItem: 'Library', 
                render: () =>   <Tab.Pane style={{ padding: 0, }}>
                                    <Library />
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
                            {window.innerWidth > 768
                                ?
                                    <Grid.Column 
                                        width={window.innerWidth > 768 ? 12 : 16}
                                        style={{ paddingLeft: 0, paddingRight: 0, }}
                                    >
                                        <ActionBar />
                                        <Library />
                                    </Grid.Column>
                                :
                                    <Tab 
                                        panes={panes} 
                                        grid={{ paneWidth: 16, tabWidth: 16 }}  
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
