import React from 'react'
import { 
    Button, 
    Paper, 
} from '@material-ui/core'
import { frame } from '../../themes/styles.js'


const Sidebar = ({ members }) => 
    <Paper square={true} elevation={0}>
        <div style={frame.sidebar}>
            <h2 style={frame.header}>Members</h2>
            <div style={{ padding: 13 }}>
                {members.map(member =>
                    <h3 key={member} style={frame.infoText}>{member}</h3>
                )}
            </div>
            <hr style={{ opacity: .3, marginTop: 13 }} />
            <Button variant="outlined"
                style={{
                    marginTop: '5vh',
                    padding: '.9rem'
                }}
            >
                Add Member
            </Button>
        </div>
    </Paper>
    
        
    
export { Sidebar }
