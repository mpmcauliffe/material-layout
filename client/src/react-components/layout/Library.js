import React, { Component } from 'react'
import { 
    Button,
    Paper, 
    Tabs, 
} from '@material-ui/core'
//import SimpleBar from 'simplebar-react'
import { Slide } from '../components'
import { books } from '../../store/store'
import { carousel } from '../../themes/styles'
import { frame } from '../../themes/styles'
//import 'simplebar/dist/simplebar.min.css'


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
                    <Button 
                        variant="outlined"
                        style={{ float: 'right' }}
                    >
                        Add Book
                    </Button>
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
