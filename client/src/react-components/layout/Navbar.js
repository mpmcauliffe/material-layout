import React, { Component } from 'react'
import { Header, HeaderLogo } from '../../assets/themes/styles'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
        const isClub = this.props.page.slice(0,4) === 'Club' ? true : false
          
        return (
            <Header size='massive' fluid>
                <Header.Item header>
                    <HeaderLogo
                        src={require(`../../assets/img/other/logo1.png`)}
                    />
                </Header.Item>    
                <Header.Item
                    name={this.props.page}
                />
                <Header.Menu position='right'>
                    { isClub ?
                        <Header.Item 
                            name='Profile' 
                            active={activeItem === 'Profile'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/profile'
                        />
                    :
                        ''
                    }
                    <Header.Item
                        name='Logout'
                        active={activeItem === 'Logout'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/logout'
                    />
                </Header.Menu>
            </Header>
        )
    }
}

export { Navbar } 
    