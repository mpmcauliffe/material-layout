import React from 'react'
import { 
    IconButton, 
    Paper, 
} from '@material-ui/core'
import { Message, PersonAdd } from '@material-ui/icons'
import { frame, iconButtonStyles, membersBar } from '../../assets/themes/styles.js'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ members, threads }) => 
    <Paper square={true} elevation={0}>
        <div style={frame.sidebar}>

            <div style={{ height: 'calc(50vh - (7vh / 2))' }}>
                <h3 style={frame.sidebarHeader}>Messages</h3>
                <IconButton style={iconButtonStyles}>
                    <Message fontSize='default' />
                </IconButton>

                <SimpleBar style={membersBar}>
                    <div style={{ padding: 13 }}>
                        {threads.map(message =>
                            <p key={message.id} style={frame.infoText}>{message.subject}</p>
                        )}
                    </div>
                </SimpleBar>
            </div>
            
        
            <div style={{ height: 'calc(50vh - (7vh / 2))' }}>
                <h3 style={frame.sidebarHeader}>Members</h3>
                            
                <IconButton style={iconButtonStyles}>
                    <PersonAdd fontSize='default' />
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
