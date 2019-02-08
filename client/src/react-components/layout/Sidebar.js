import React from 'react'
import { 
    Button,
    Grid, 
    Icon, 
} from 'semantic-ui-react'
import { 
    IconButtonContainer,
    SidebarCanvas,
    SidebarContainer,
    SidebarHeader,
    Content, 
    Sidescroll,
    SmallText,
    SmallMessageCard,
    TopicText,
} from '../../assets/styles/components'
import { truncate } from '../../assets/javascript'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ 
    address, 
    email, 
    members, 
    threads, 
    phone, 
    user, 
}) =>  

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
                    {threads.map(message =>
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
    
    
        
export { Sidebar } 
