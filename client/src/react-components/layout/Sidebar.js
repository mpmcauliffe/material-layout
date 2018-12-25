import React from 'react'
import { 
    Button, 
    Paper, 
} from '@material-ui/core'
import { frame } from '../../themes/styles.js'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ members }) => 
    <Paper square={true} elevation={0}>
        <div style={frame.sidebar}>
            <h2 style={frame.header}>Members</h2>
            <SimpleBar style={{ height: '60vh', overflowX: 'hidden', marginTop: '1rem' }}>
                <div style={{ padding: 13 }}>
                    {members.map(member =>
                        <h3 key={member} style={frame.infoText}>{member}</h3>
                    )}
                </div>
            </SimpleBar>
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
