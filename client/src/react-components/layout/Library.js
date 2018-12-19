import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import { SideButton, Slide } from '../components'
import { books } from '../../store/store'


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
                    <div>
                        <div>
                            {books.map(book =>
                                <Slide
                                    key={book.number}
                                    number={book.number}
                                    name={book.name}
                                    author={book.author}    
                                />
                            )}
                        </div>
                    </div>
                    
                </div>
            </Paper>
        )
    }
}


export { Library }
