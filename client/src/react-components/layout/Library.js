import React from 'react'
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
import { alphabetize } from '../../assets/javascript'


const Library = ({ bookList, handleValueChange, value }) => { 
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
                        value={value} 
                        onChange={handleValueChange}
                        indicatorColor='primary'
                        scrollButtons='auto'
                        scrollable
                    >
                        {alphabetize(bookList).map(book =>
                            <Slide
                                key={book.number}
                                number={book.number}
                                information={book}
                                isEvent={false}
                            />
                        )}
                    </Tabs>
                </Carousel>
                
            </LibraryCanvas>
        </Paper>
    )
}   


export { Library }


// number={book.number}
//                                 title={book.title}
//                                 information={book.author}    