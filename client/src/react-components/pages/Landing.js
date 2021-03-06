import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Login, SignUp, Slideshow, } from '../components'
import { 
    AppModal, 
    AppModalHeader, 
    BookwormzLogo, 
    MainButton, 
} from '../../assets/styles/components'


const Landing = ({ appAuth }) => 
    <Fragment>
        <BookwormzLogo src={require(`../../assets/img/other/logoShape.svg`)} />
        
        <Slideshow />

        <AppModal className='app__modal' style={{ zIndex: 5 }} trigger={<MainButton>Sign In</MainButton>}>
            <AppModalHeader>Sign In</AppModalHeader>
            <Login appAuth={appAuth} />
        </AppModal>

        <AppModal className='app__modal' style={{ zIndex: 5 }} trigger={<MainButton>Sign Up</MainButton>}>
            <AppModalHeader>Sign Up</AppModalHeader>
            <SignUp appAuth={appAuth} />
        </AppModal>
    </Fragment>
    

Landing.propTypes = {
    appAuth: PropTypes.func.isRequired
}


export { Landing }
