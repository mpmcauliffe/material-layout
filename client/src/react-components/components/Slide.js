import React from 'react'
import { 
    BookCover,
    Card,
    InfoText,
    TopicText,  
} from '../../assets/themes/styles'
import { truncate } from '../../assets/javascript'


const Slide = ({ author, event, information, number, title, }) => 

        <Card>
            <BookCover
                src={event ? require(`../../assets/img/book_img/${number+1}.jpg`) : 
                        require(`../../assets/img/dummy/${number}.png`)}
                alt='book cover'
            />
            <div>
                <div>
                    <TopicText>
                        <em>
                            {truncate(title, 21)}
                        </em>
                    </TopicText>
                    {event ?
                        <div>
                            <InfoText>{information[0]}</InfoText> 
                            <InfoText>{information[1]}</InfoText> 
                        </div> 
                    :
                        <InfoText>
                            {information}
                        </InfoText>
                    }
                </div>
            </div>
        </Card>
    

export { Slide }

// <div  style={{ marginLeft: '50px', marginRight: '50px', }}>
//                                             <h3 style={frame.infoText}><em>{truncate(event.book, 25)}</em></h3>
//                                             <div style={{ marginTop: '2rem' }}>
//                                                 <h4 style={frame.smallText}>{truncate(event.location, 23)}</h4>
//                                                 <h4 style={frame.smallText}>{event.time}</h4>
//                                             </div>
//                                             <IconButton
//                                                 //color='primary.dark'
//                                                 variant='outlined'
//                                                 style={{ opacity: .5, marginTop: 10 }}
//                                             >
//                                                 <Edit />
//                                             </IconButton>
//                                         </div>