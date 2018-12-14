import React from 'react'
import { Button, Paper } from '@material-ui/core'


const Sidebar = ({ members }) => 
    <Paper square={true} elevation={0}>
        <div style={{ 
                height: '91.7vh',
                width: '100%',
                padding: 6,
                //backgroundColor: '#efdcd5',
                backgroundColor: '#d6cbc7'
            }}
        >
            <h2 style={{ margin: 0, fontStyle: 'bold' }}>Members</h2>
            <div style={{ padding: 13 }}>
                {members.map(member =>
                    <h3 key={member}>{member}</h3>
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
