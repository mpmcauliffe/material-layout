import React, { Component } from 'react'
import { 
    IconButton,
    Paper, 
    Tabs, 
} from '@material-ui/core'
import { Add, Apps } from '@material-ui/icons'
import { Slide } from '../components'
import { books } from '../../assets/store/store'
import { carousel, frame } from '../../assets/themes/styles'


class Library extends Component { 
    state = {
        value: 0,
    }

    handleChange = (e, value) => 
        this.setState({ value });
      

    render() {

        return (
            <Paper square={true} elevation={0}>
                <div style={frame.library}>
                    <IconButton 
                        variant="outlined"
                        color='primary.dark'
                        style={{ float: 'right', opacity: .5, }}
                    >
                        <Add fontSize='18' />
                    </IconButton>
                    <IconButton 
                        variant="outlined"
                        color='primary.dark'
                        style={{ float: 'right', opacity: .5, }}
                    >
                        <Apps fontSize='18' />
                    </IconButton>
                    <h2 style={frame.header}>Reading List</h2>
                    <div style={carousel.container}>
                        <Tabs
                            //style={carousel.carouselViewport}
                            value={this.state.value} 
                            onChange={this.handleChange}
                            indicatorColor='secondary'
                            textColor='secondary'
                            scrollButtons='auto'
                            scrollable
                        >
                            {books.map(book =>
                                <Slide
                                    key={book.number}
                                    number={book.number}
                                    name={book.name}
                                    author={book.author}    
                                />
                            )}
                        </Tabs>
                    </div>
                    
                </div>
            </Paper>
        )
    }
}


export { Library }
