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
import SimpleBar from 'simplebar-react'
import { 
    frame, 
    iconButtonStyles, 
    membersBar, 
} from '../../assets/themes/styles.js'
import { truncate } from '../../assets/javascript'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ members, threads }) => 
    <Paper square={true} elevation={0}>
        <div style={frame.sidebar}>

            <div style={{ height: 'calc(50vh - (7vh / 2))' }}>
                <h3 style={frame.sidebarHeader}>Messages</h3>
                <IconButton style={iconButtonStyles}>
                    <AddComment fontSize='default' />
                </IconButton>
                <IconButton style={iconButtonStyles}>
                    <Reorder fontSize='default' />
                </IconButton>

                <SimpleBar style={membersBar}>
                    <div style={{ padding: 13 }}>
                        {threads.map(message =>
                            <div 
                                key={message.id}
                                style={{ 
                                    border: '.3px solid #d6cbc7', 
                                    padding: 2,
                                    background: '#e4ddda',
                                }}
                            >
                                <p style={frame.infoText}>
                                    <em>{truncate(message.subject, 30)}</em>
                                </p>
                                <Grid container>
                                    <Grid item md={5}>
                                        <p style={frame.smallText}>{message.creator}</p>
                                    </Grid>
                                    <Grid item md={5}>
                                        <p style={frame.smallText}>{message.date}</p>
                                    </Grid>
                                    <Grid item md={2}>
                                        <p style={frame.smallText}>{message.replies.length}</p>
                                    </Grid>
                                </Grid>
                            </div>
                            
                        )}
                    </div>
                </SimpleBar>
            </div>
            
        
            <div style={{ height: 'calc(50vh - (7vh / 2))' }}>
                <h3 style={frame.sidebarHeader}>Members</h3>
                            
                <IconButton style={iconButtonStyles}>
                    <PersonAdd fontSize='default' />
                </IconButton>
                <IconButton style={iconButtonStyles}>
                    <Reorder fontSize='default' />
                </IconButton>

                <SimpleBar style={membersBar}>
                    <div style={{ padding: 13 }}>
                        {members.map(member =>
                            <p key={member} style={frame.infoText}>{member}</p>
                        )}
                    </div>
                </SimpleBar>
            </div>
            
        </div>
    </Paper>
    
        
    
export { Sidebar }
