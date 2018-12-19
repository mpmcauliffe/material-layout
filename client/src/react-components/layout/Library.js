import React, { Component } from 'react'
import { Paper } from '@material-ui/core'


class Library extends Component { 
    render() {
        return (
            <Paper square={true} elevation={0}>
                <div style={{ 
                        height: '45.85vh',
                        width: '100%',
                        padding: 6,
                        backgroundColor: '#e4e4e5',
                    }}
                >
                    <h2 style={{ margin: 0, fontStyle: 'bold' }}>Reading List</h2>
                    <img
                        //key={index + 4}
                        //id={index}
                        src={require(`../../img/9.png`)}
                        //className="cvr-img"
                        alt='book cover'
                    />
                </div>
            </Paper>
        )
    }
}


export { Library }
