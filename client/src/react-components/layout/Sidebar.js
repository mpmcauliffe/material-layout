import React, { Fragment } from 'react'
import { 
    Button,
    Grid, 
    Icon, 
} from 'semantic-ui-react'
import { ProfileEdit } from '../components'
import { 
    Content,
    IconButtonContainer,
    SidebarCanvas,
    SidebarContainer,
    SidebarHeader,
    Sidescroll,
    SmallText,
    SmallMessageCard,
    TopicText,
} from '../../assets/styles/components'
import { SidebarText, Submenu } from '../../assets/styles/components/sidebar'
import { truncate } from '../../assets/javascript'
import { members, thread, } from '../../assets/store/store'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ 
    address, 
    email, 
    phone,
    profile,
    profileEditClose, 
    user, 
}) => {
    return (
        <Fragment>
            {profile
                ?
                <SidebarCanvas>
                    <Submenu>
                        <SidebarHeader>Profile</SidebarHeader>
                        <ProfileEdit user={user} onClose={profileEditClose} />
                    </Submenu>
                    <SidebarText>{truncate(address, 35)}</SidebarText>
                    <SidebarText>{phone}</SidebarText>
                    <SidebarText>{email}</SidebarText>
                    <br /><br />
                </SidebarCanvas>
                :
                <SidebarCanvas>
                    <SidebarContainer>
                        <SidebarHeader>Messages</SidebarHeader>

                        <IconButtonContainer>
                            <Button>
                                <Icon name='align justify' />
                            </Button>
                            <Button>
                                <Icon name='comment' />
                            </Button>
                        </IconButtonContainer>
                        

                        <Sidescroll>
                            <Content>
                                {thread.map(message =>
                                    <SmallMessageCard 
                                        key={message.id}
                                    >
                                        <TopicText>
                                            <em>{truncate(message.subject, 30)}</em>
                                        </TopicText>
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <SmallText>{message.creator}</SmallText>
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                <SmallText>{message.date}</SmallText>
                                            </Grid.Column>
                                            <Grid.Column width={2}>
                                                <SmallText>{message.replies.length}</SmallText>
                                            </Grid.Column>
                                        </Grid>
                                    </SmallMessageCard>
                                    
                                )}
                            </Content>
                        </Sidescroll>
                    </SidebarContainer>
                    
                
                    <SidebarContainer>
                        <SidebarHeader>Members</SidebarHeader>

                        <IconButtonContainer>
                            <Button>
                                <Icon name='align justify' />
                            </Button>
                            <Button>
                                <Icon name='user plus' />
                            </Button>
                        </IconButtonContainer>
                        
                        <Sidescroll>
                            <Content>
                                {members.map(member =>
                                    <TopicText key={member}>{member}</TopicText>
                                )}
                            </Content>
                        </Sidescroll>
                    </SidebarContainer>
                </SidebarCanvas>
            }
        </Fragment>
    )
}    
    
        
export { Sidebar } 
