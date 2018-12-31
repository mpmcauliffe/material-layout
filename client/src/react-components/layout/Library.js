import React, { Component } from 'react'
import { 
    IconButton,
    Paper, 
    Tabs, 
} from '@material-ui/core'
import { Add, Apps } from '@material-ui/icons'
import { Slide } from '../components'
import { books } from '../../assets/store/store'
import { 
    Carousel,
    IconButtonContainer,
    LibraryCanvas,
    SectionHeader,
} from '../../assets/themes/styles'


class Library extends Component { 
    state = {
        value: 0,
    }

    handleChange = (e, value) => 
        this.setState({ value })
      

    render() {

        return (
            <Paper square={true} elevation={0}>
                <LibraryCanvas>
                    <IconButtonContainer>
                        <IconButton>
                            <Add fontSize='default' />
                        </IconButton>
                        <IconButton>
                            <Apps fontSize='default' />
                        </IconButton>
                    </IconButtonContainer>

                    <SectionHeader>Reading List</SectionHeader>

                    <Carousel>
                        <Tabs
                            value={this.state.value} 
                            onChange={this.handleChange}
                            indicatorColor='primary'
                            scrollButtons='auto'
                            scrollable
                        >
                            {books.map(book =>
                                <Slide
                                    key={book.number}
                                    number={book.number}
                                    title={book.title}
                                    information={book.author}    
                                    event={false}
                                />
                            )}
                        </Tabs>
                    </Carousel>
                    
                </LibraryCanvas>
            </Paper>
        )
    }
}


export { Library }
