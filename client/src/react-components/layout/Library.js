import React, { Fragment } from 'react'
import { Carousel, Slide, } from '../components'
import { 
    IconButtonContainer,
    LibraryCanvas,
    SectionHeader,
    Sidescroll,
} from '../../assets/styles/components'
import { IconButton } from '../../assets/styles/components/general'
import { bookList } from '../../assets/store/store'
import { alphabetize } from '../../assets/javascript'


const Library = () => { 
    return (
            <LibraryCanvas>
                <Fragment>
                    {window.innerWidth > 480
                        ?
                        <Fragment>
                            <IconButtonContainer>
                                <IconButton icon='add' />
                            </IconButtonContainer>
                            <SectionHeader>Library</SectionHeader>
                            <Carousel isEvent={false} />
                        </Fragment>                        
                        :
                        <Fragment>
                            <IconButtonContainer>
                                <IconButton icon='add' />
                            </IconButtonContainer>
                            <SectionHeader>
                                Library
                            </SectionHeader>
                            <Sidescroll style={{ height: '85vh', marginTop: '29px', }}>
                                {alphabetize(bookList).map(book =>
                                    <Slide
                                        key={book.number}
                                        number={book.number}
                                        information={book}
                                        isEvent={false}
                                    />
                                )}
                            </Sidescroll>                        
                        </Fragment>
                    }
                </Fragment>
            </LibraryCanvas>
    )
}   


export { Library }
