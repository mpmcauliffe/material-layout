import React, { Component } from 'react'
import { 
    Paper, 
    Tabs, 
    withWidth,
} from '@material-ui/core'
import SimpleBar from 'simplebar-react'
import { SideButton, Slide } from '../components'
import { books } from '../../store/store'
import { carousel } from '../../themes/styles'
import 'simplebar/dist/simplebar.min.css'


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
                    <div style={carousel.container}>
                        {/* <SideButton /> */}
                        <Tabs 
                            indicatorColor='secondary'
                            textColor='secondary'
                            scrollButtons='auto'
                            scrollable
                        >
                            {/** <SimpleBar style={carousel.carouselViewport}> */}
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
