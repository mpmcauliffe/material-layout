import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { Navbar, } from '../layout'
import { Sidebar } from '../layout/Sidebar'
import { 
    ClubLink, 
    CreateClub, 
} from '../components'
import API from '../../utils/API'
//import '../../assets/scss/index.scss'

class Profile extends React.Component {

    state = {
        toClub: false,
        user: {},
        clubs: [],
    }

    componentWillMount = () => {
        this.setState({ user: this.props.user, toClub: false }, this.loadClubs)
    }

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

    render() {
        const title = `Profile of ${this.state.user.firstname} ${this.state.user.lastname}`

        const { address, email, phone, user, } = this.state

        console.log(address, email, phone)
        if (this.state.toClub)
            return <Redirect to="/club" />

        return (

            <Fragment>
                <Navbar page={title} />

                <Grid divided='vertically'>
                    <Grid.Column width={4}>
                        <Sidebar 
                            address={this.state.user.address}
                            email={this.state.user.email}
                            phone={this.state.user.phone}
                            profile={true}
                            user={user}
                            profileEditClose={this.onProfileEditClose}
                        />
                    </Grid.Column>

                    <Grid.Column width={12}>

                        <h4>Your Book Clubs:</h4>
                            { this.state.clubs.map( club => (
                                <ul>
                                    <li>
                                        <ClubLink onClick={this.viewClub} clubname={club.clubname} className='sidebar__link' >
                                            {club.clubname}
                                        </ClubLink>
                                    </li>
                                </ul>
                            )) }

                    <br /><br />
                    
                    <CreateClub user={this.state.user} onClose={this.onCreateClubClose} className="sidebar__button" />

                    </Grid.Column>
                    
                </Grid>
                <Navbar page={title} />
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