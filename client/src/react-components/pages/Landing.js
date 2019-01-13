import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Login, SignUp, Slideshow, } from '../components'
import { AppModal, CenterContainer, BookwormzLogo, MainButton, } from '../../assets/styles/components'


class Landing extends React.Component {
    render() {
        return (
            <Fragment>
                <BookwormzLogo src={require(`../../assets/img/other/logoNew2.png`)} />
                
                <Slideshow />

                <AppModal className='app__modal' style={{ zIndex: 5 }} trigger={<MainButton>Sign In</MainButton>}>
                    <AppModal.Header>Sign In</AppModal.Header>
                    <Login appAuth={this.props.appAuth} />
                </AppModal>

                <AppModal className='app__modal' style={{ zIndex: 5 }} trigger={<MainButton>Sign Up</MainButton>}>
                    <AppModal.Header>Sign Up</AppModal.Header>
                    <SignUp appAuth={this.props.appAuth} />
                </AppModal>
            </Fragment>
        )
    }
}

Landing.propTypes = {
    appAuth: PropTypes.func.isRequired
}


export { Landing }
