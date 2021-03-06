import React, { Component, Fragment, } from 'react'
import { Link } from 'react-router-dom'
import { Responsive, } from 'semantic-ui-react'
import { Header, HeaderLogo, } from '../../assets/styles/components/general'
import { SidebarButton } from '../../assets/styles/components/sidebar'
import { truncate } from '../../assets/javascript'


class Navbar extends Component {
    state = {
        height: window.innerHeight, 
        width: window.innerWidth,
    }
  
    updateDimensions = () => 
        this.setState({
            height: window.innerHeight, 
            width: window.innerWidth,
        })
    componentDidMount() { 
        window.addEventListener('resize', this.updateDimensions)
    }
    componentWillMount() { 
        window.removeEventListener('resize', this.updateDimensions)
    }

    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
        const { activeItem } = this.state
        const isClub = this.props.page.slice(0,4) === 'Club' ? true : false
          
        return (
            <Fragment>
                {this.props.header 
                    ?
                    <Fragment>
                        {window.innerWidth < 769
                            ?   <Fragment>
                                {window.innerWidth < 640 
                                    ?
                                    <Fragment>
                                        <Header size='massive' fluid borderless>
                                            <Header.Menu position='left'>
                                                <Header.Item 
                                                    header 
                                                    as={Responsive}
                                                    maxWidth={980}    
                                                >
                                                    <SidebarButton
                                                        onClick={this.props.sidebarClickHandler}
                                                        icon='sidebar' 
                                                    />
                                                </Header.Item>
                                            </Header.Menu>
                                            <Header.Item position='left' header>
                                                <HeaderLogo
                                                    src={isClub 
                                                            ? require(`../../assets/img/other/bkwzOrange.svg`)
                                                            : require(`../../assets/img/other/bkwzBlue.svg`)
                                                        }
                                                />
                                            </Header.Item>
                                            <Header.Menu position='right'>
                                                {isClub ?
                                                    <Header.Item 
                                                        active={activeItem === 'Profile'}
                                                        as={Link}
                                                        to='/profile'
                                                    >
                                                        <SidebarButton
                                                            onClick={this.handleItemClick}
                                                            icon='user' 
                                                            style={{ paddingRight: 10, }}
                                                        />
                                                    </Header.Item>
                                                :
                                                    ''
                                                }
                                                <Header.Item
                                                    active={activeItem === 'Logout'}
                                                    as={Link}
                                                    to='/logout'
                                                >
                                                    <SidebarButton
                                                        onClick={this.handleItemClick}
                                                        icon='log out' 
                                                        style={{ paddingLeft: 10, }}
                                                    />
                                                </Header.Item>
                                            </Header.Menu>
                                        </Header>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <Header size='massive' fluid borderless>
                                            <Header.Menu position='left'>
                                                <Header.Item 
                                                    header 
                                                    as={Responsive}
                                                    maxWidth={980}    
                                                >
                                                    <SidebarButton
                                                        onClick={this.props.sidebarClickHandler}
                                                        icon='sidebar' 
                                                    />
                                                </Header.Item>
                                            </Header.Menu>
                                            <Header.Item position='left' header>
                                                <HeaderLogo
                                                    src={isClub 
                                                            ? require(`../../assets/img/other/bkwzOrange.svg`)
                                                            : require(`../../assets/img/other/bkwzBlue.svg`)
                                                        }
                                                />
                                            </Header.Item>
                                            <Header.Item 
                                                position='left'
                                                name={truncate(this.props.page, 27)}
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
                                    </Fragment>
                                }
                                </Fragment>
                                
                            :
                                <Fragment>
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
                                </Fragment>                    
                            }
                        </Fragment>
                    :
                        <Fragment>
                            <Header 
                                size='massive' 
                                inputcolor='#2D2C2C' 
                                fluid
                                inverted
                                borderless
                                style={window.innerWidth < 769 ? { position: 'relative', bottom: 0, } : {}}
                            >
                                {window.innerWidth > 768
                                    ?
                                    <Header.Item header>
                                        <HeaderLogo
                                            src={require(`../../assets/img/other/bkwzDark.svg`)}
                                        />
                            
                                    </Header.Item>
                                    :
                                    <Fragment />
                                }
                                <Header.Menu position='right'>
                                    {isClub ?
                                        <Header.Item 
                                            name='Leave Group' 
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
                        </Fragment>
                    }
                </Fragment>
        )
    }
}


export { Navbar } 
