import React from 'react'
import { 
    IconButton,
    Grid, 
    Paper, 
} from '@material-ui/core'
import { 
    AddComment, 
    PersonAdd,
    Reorder, 
} from '@material-ui/icons'
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


const Sidebar = ({ members, threads }) => 
    <Paper square={true} elevation={0}>
        <SidebarCanvas>
            <SidebarContainer>
                <SidebarHeader>Messages</SidebarHeader>

                <IconButtonContainer>
                    <IconButton>
                        <Reorder fontSize='default' />
                    </IconButton>
                    <IconButton>
                        <AddComment fontSize='default' />
                    </IconButton>
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
                                <Grid container>
                                    <Grid item md={5}>
                                        <SmallText>{message.creator}</SmallText>
                                    </Grid>
                                    <Grid item md={5}>
                                        <SmallText>{message.date}</SmallText>
                                    </Grid>
                                    <Grid item md={2}>
                                        <SmallText>{message.replies.length}</SmallText>
                                    </Grid>
                                </Grid>
                            </SmallMessageCard>
                            
                        )}
                    </Content>
                </Sidescroll>
            </SidebarContainer>
            
        
            <SidebarContainer>
                <SidebarHeader>Members</SidebarHeader>

                <IconButtonContainer>
                    <IconButton>
                        <Reorder fontSize='default' />
                    </IconButton>
                    <IconButton>
                        <PersonAdd fontSize='default' />
                    </IconButton>
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
    </Paper>
    
        
    
export { Sidebar }
