import React, { Component, Fragment, } from 'react'
import { Header, HeaderLogo, } from '../../assets/styles/components/general'
import { Link } from 'react-router-dom'


class Navbar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
        const isClub = this.props.page.slice(0,4) === 'Club' ? true : false
          
        return (
            <Fragment>
                {this.props.header 
                    ?
                    <Header size='massive' fluid>
                        <Header.Item header>
                            <HeaderLogo
                                src={isClub 
                                        ? require(`../../assets/img/other/bkwzOrange.svg`)
                                        : require(`../../assets/img/other/bkwzBlue.svg`)
                                    }
                            />
                        </Header.Item>    
                        <Header.Item
                            name={this.props.page}
                        />
                        <Header.Menu position='right'>
                            {isClub ?
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
                    :
                    <Header 
                        size='massive' 
                        inputcolor='#2D2C2C' 
                        fluid
                        inverted
                    >
                        <Header.Item header>
                            <HeaderLogo
                                src={require(`../../assets/img/other/bkwzDark.svg`)}
                            />
                        </Header.Item>
                        <Header.Menu position='right'>
                        {isClub ?
                            <Header.Item 
                                name='Leave this Group' 
                                active={activeItem === 'Leave'}
                                onClick={this.handleItemClick}
                                as={Link}
                                to='/profile'
                            />
                        :
                            ''
                        }
                        <Header.Item
                            name='Contact Us'
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/'
                        />
                        </Header.Menu>
                    </Header>
                }    
            </Fragment>

        )
    }
}

export { Navbar } 
    

//src={require(`../../assets/img/other/bkwzShape.svg`)}