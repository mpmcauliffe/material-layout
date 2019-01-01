import React from 'react'
import { 
    BookCover,
    Card,
    InfoText,
    TopicText,  
} from '../../assets/themes/styles'
import { truncate } from '../../assets/javascript'


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
                        <InfoText>
                            {information.author}
                        </InfoText>
                    }
                </div>
            </div>
        </Card>
    

export { Slide }
