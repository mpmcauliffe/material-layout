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
    SidebarMenu, 
    Sidescroll,
    SmallText,
    SmallMessageCard,
    TopicText,
} from '../../assets/themes/styles.js'
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
                    <SidebarMenu>
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
                    </SidebarMenu>
                </Sidescroll>
            </SidebarContainer>
            
        
            <SidebarContainer>
                <SidebarHeader>Members</SidebarHeader>

                <IconButtonContainer>
                    <IconButton>
                        <PersonAdd fontSize='default' />
                    </IconButton>
                    <IconButton>
                        <Reorder fontSize='default' />
                    </IconButton>
                </IconButtonContainer>
                
                <Sidescroll>
                    <SidebarMenu>
                        {members.map(member =>
                            <TopicText key={member}>{member}</TopicText>
                        )}
                    </SidebarMenu>
                </Sidescroll>
            </SidebarContainer>
        </SidebarCanvas>
    </Paper>
    
        
    
export { Sidebar }
