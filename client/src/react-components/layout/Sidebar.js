import React, { Fragment } from 'react'
import { 
    Button,
    Grid, 
    Icon, 
} from 'semantic-ui-react'
import { ClubLink, CreateClub, ProfileEdit, } from '../components'
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
    clubs,
    email, 
    onCreateClubClose,
    phone,
    profile,
    profileEditClose, 
    user, 
    viewClub,
}) => {
    return (
        <Fragment>
            {profile
                ?
                <SidebarCanvas>
                    <div>
                        <Submenu>
                            <SidebarHeader>Profile</SidebarHeader>
                            <ProfileEdit user={user} onClose={profileEditClose} />
                        </Submenu>
                        <SidebarText>{truncate(address, 35)}</SidebarText>
                        <SidebarText>{phone}</SidebarText>
                        <SidebarText>{email}</SidebarText>
                        <br /><br />
                    </div>

                    <div>
                        <Submenu>
                            <SidebarHeader>
                                {clubs.length > 0 ? (clubs.length > 1 ? "Your clubs" : "Your club") : "You don't yet belong to any clubs"}
                            </SidebarHeader>
                        </Submenu>
                        {clubs.map(club => (
                            <ul key={club.clubname}>
                                <li>
                                    <ClubLink onClick={viewClub} clubname={club.clubname}>
                                        <SidebarText>{club.clubname}</SidebarText>
                                    </ClubLink>
                                </li>
                            </ul>
                        ))}
                        <br /><br />
                    </div>
                    
                    <CreateClub user={user} onClose={onCreateClubClose} />
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
