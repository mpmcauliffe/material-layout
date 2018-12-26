import React from 'react'
import { 
    IconButton, 
    Paper, 
} from '@material-ui/core'
import { Message, PersonAdd } from '@material-ui/icons'
import { frame, membersBar } from '../../assets/themes/styles.js'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ members }) => 
    <Paper square={true} elevation={0}>
        <div style={frame.sidebar}>
            <h2 style={frame.header}>Members</h2>
            <SimpleBar style={membersBar}>
                <div style={{ padding: 13 }}>
                    {members.map(member =>
                        <h3 key={member} style={frame.infoText}>{member}</h3>
                    )}
                </div>
            </SimpleBar>
            <hr style={{ opacity: .3, marginTop: 13 }} />
            <div style={{ position: 'absolute', bottom: 0, }}>
                <IconButton
                    color='primary.dark'
                    style={{
                        marginTop: '5vh',
                        padding: '.9rem',
                        marginRight: '1vw',
                        opacity: .5,
                    }}
                >
                    <PersonAdd fontSize='18px' />
                </IconButton>
                <IconButton
                    color='primary.dark'
                    style={{
                        marginTop: '5vh',
                        padding: '.9rem',
                        opacity: .5,
                    }}
                >
                    <Message fontSize='18px' />
                </IconButton>
            </div>
            
        </div>
    </Paper>
    
        
    
export { Sidebar }
