import React from 'react'
import { 
    BookCover,
    Card,
    InfoText,
    Rate,
    TopicText,  
} from '../../assets/styles/components'
import { starGenerator, truncate } from '../../assets/javascript'


const Slide = ({ isEvent, information, number, }) => 

        <Card>
            <BookCover
                src={isEvent ? require(`../../assets/img/book_img/${number+1}.jpg`) : 
                        require(`../../assets/img/book_img/${information.number}.jpg`)}
                alt='book cover'
            />
            <div>
                <div>
                    <TopicText>
                        <em>
                            {truncate(information.title, 21)}
                        </em>
                    </TopicText>
                    {isEvent ?
                        <div>
                            <InfoText>{information.location}</InfoText> 
                            <InfoText>{information.time}</InfoText> 
                        </div> 
                    :
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
                    }
                </div>
            </div>
        </Card>
    

export { Slide }

//<SmallText>Rating: {score}</SmallText>