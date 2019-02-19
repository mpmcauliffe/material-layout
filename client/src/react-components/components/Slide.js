import React, { Fragment } from 'react'
import { 
    BookCover,
    Card,
    EventCard,
    InfoText,
    Rate,
    TopicText,  
} from '../../assets/styles/components'
import { starGenerator, truncate } from '../../assets/javascript'


const Slide = ({ isEvent, information, }) => 

    <Fragment>
        {isEvent
            ?
            <EventCard>
                <BookCover
                    src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                    size={'33vh'}
                    alt='book cover'
                />
            </EventCard>
            :
            <Card>
                <BookCover
                    src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                    size={'17vh'}
                    alt='book cover'
                />
                <TopicText>
                    <em>
                        {truncate(information.title, 21)}
                    </em>
                </TopicText>
                <div>
                    <InfoText>
                        {information.author}
                    </InfoText>
                    {starGenerator(information.rating).map((score, index) => 
                        <Rate 
                            key={index} 
                            src={require(`../../assets/img/rating/${score}.svg`)}
                            alt={'rating'} 
                        />    
                    )}
                </div>
            </Card>
        }
    </Fragment>
    

export { Slide }

//<SmallText>Rating: {score}</SmallText>