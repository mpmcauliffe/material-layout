import React, { Component } from 'react'
import { 
    Paper, 
    Tabs, 
    withWidth,
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
                    <h2 style={{ margin: 0, fontStyle: 'bold' }}>Reading List</h2>
                    <div style={carousel.container}>
                        
                        <Tabs
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
