import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid, Tab } from 'semantic-ui-react'
import { Aside, Navbar, } from '../layout'
//import { Aside } from '../layout/Aside'
import { 
    ActionBarCanvas, 
    LibraryCanvas, 
    SectionHeader, 
} from '../../assets/styles/components'
import { Drawer } from '../../assets/styles/components/sidebar'
import API from '../../utils/API'

import { Backdrop, } from '../components/Backdrop'


class Profile extends React.Component {

    state = {
        toClub: false,
        user: {},
        clubs: [],
        sidebarVisible: window.innerWidth < 769 ? false : true,
        height: window.innerHeight, 
        width: window.innerWidth,
    }

    componentWillMount = () => {
        this.setState({ user: this.props.user, toClub: false }, this.loadClubs)
        window.removeEventListener('resize', this.updateDimensions)
    }
    componentDidMount() { 
        window.addEventListener('resize', this.updateDimensions)
    }
    updateDimensions = () => 
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth,
        })

    loadClubs = () => {
        API.getUserClubs( this.state.user.email )
            .then( res => {
                if ( res.data ) {
                    // if we found a list of clubs, then put then in the clubs array
                    this.setState({ clubs: res.data })
                }
            })
            .catch( err => {
                console.log(err)
            })
    }

    onProfileEditClose = ( updatedUser ) => {
        this.setState({ user: updatedUser })
        this.props.userUpdated( this.state.user )
    }

    onCreateClubClose = ( newClub ) => {
        if ( newClub ) {
            this.setState({ clubs: [...this.state.clubs, newClub] })
        }
    }

    viewClub = ( clubname ) => {
        const clubNbr = this.state.clubs.findIndex(x => x.clubname === clubname)
        this.props.setClub( this.state.clubs[clubNbr])
        this.setState({toClub: true})
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
        const title = `Profile of ${this.state.user.firstname} ${this.state.user.lastname}`
        const { sidebarVisible, user, } = this.state
        let backdrop

        const panes = [
            { 
                menuItem: 'Current Activity', 
                render: () =>   <Tab.Pane style={{ padding: 0 }}>
                                    <ActionBarCanvas>
                                        <SectionHeader>Activity</SectionHeader>
                                    </ActionBarCanvas>
                                </Tab.Pane>, 
            }, { 
                menuItem: 'Your Books', 
                render: () =>   <Tab.Pane style={{ padding: 0 }}>
                                    <LibraryCanvas>
                                        <SectionHeader>Your Books</SectionHeader>
                                    </LibraryCanvas>
                                </Tab.Pane>, 
            },
        ]


        if (this.state.toClub)
            return <Redirect to="/club" />

        if(sidebarVisible && window.innerWidth < 769) 
            backdrop = <Backdrop click={this.backdropClickHandler} />
        
        return (

            <Fragment>
                <Navbar 
                    header={true}
                    page={title} 
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
                                            address={this.state.user.address}
                                            clubs={this.state.clubs}
                                            email={this.state.user.email}
                                            phone={this.state.user.phone}
                                            profile={true}
                                            user={user}
                                            onCreateClubClose={this.onCreateClubClose}
                                            profileEditClose={this.onProfileEditClose}
                                            viewClub={this.viewClub}
                                        />
                                    </Grid.Column>
                                :
                                    <Fragment>
                                        <Drawer 
                                            show={sidebarVisible ? 'translateX(0)' : 'translateX(-100%)'}
                                        >
                                            <Aside
                                                address={this.state.user.address}
                                                clubs={this.state.clubs}
                                                email={this.state.user.email}
                                                phone={this.state.user.phone}
                                                profile={true}
                                                user={user}
                                                onCreateClubClose={this.onCreateClubClose}
                                                profileEditClose={this.onProfileEditClose}
                                                viewClub={this.viewClub}
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
                                            <SectionHeader>Activity</SectionHeader>
                                        </ActionBarCanvas>
                                        <LibraryCanvas>
                                            <SectionHeader>Your Books</SectionHeader>
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

Profile.propTypes = {
    user: PropTypes.shape({
        firstname:  PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }),

    userUpdated: PropTypes.func.isRequired,

    setClub: PropTypes.func.isRequired
}

export { Profile }
