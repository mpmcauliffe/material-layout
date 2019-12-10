import React, { Fragment } from 'react'
import { Grid, Responsive } from 'semantic-ui-react'
import { 
    BookCover,
    Card,
    ColTwo,
    EventCard,
    EventHeader,
    EventInfo,
    EventText,
    InfoText,
    MapCanvas,
    Rate,
    IconButton,
    TopicText,  
} from '../../assets/styles/components'
import { starGenerator, truncate } from '../../assets/javascript'
import { MobileCard } from '../../assets/styles/components/slide'


const BookInfo = ({ information }) =>
    <Fragment>      
        <EventHeader>{truncate(information.title, 13)}</EventHeader>    
        <div>
            <EventInfo style={window.innerWidth > 768 ? { marginBottom: 5, } : {}}>
                {truncate(information.author, 20)}
            </EventInfo>
            {window.innerWidth > 768 
                ? <RatingGenerator rating={information.rating} />
                : <Fragment />
            }
        </div>
        <div>
            {window.innerWidth > 768 
                ? <IconButton icon='edit' />
                : <Fragment />
            }             
        </div>
    </Fragment>


const LocationInfo = ({ information }) =>
    <Fragment>
        {window.innerWidth < 769
            ?
            <div style={{ textAlign: 'right' }}>
                <EventInfo>{information.date}</EventInfo>
                <EventText>{information.time}</EventText>
                <EventInfo>{truncate(information.location, 30)}</EventInfo>
                <EventText>{information.street}</EventText>
                <EventText>{information.town}</EventText>
                <div style={{ marginTop: '2rem', }}>
                    <IconButton icon='map' />
                    <IconButton icon='edit' />              
                </div>
            </div> 
            :
            <Fragment>
                <div style={{ textAlign: 'right' }}>
                    <EventInfo>{information.date}</EventInfo>
                    <EventText>{information.time}</EventText>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <EventInfo>{truncate(information.location, 30)}</EventInfo>
                    <EventText>{information.street}</EventText>
                    <EventText>{information.town}</EventText>
                </div>                  
            </Fragment>
        }
    </Fragment>


const RatingGenerator = ({ rating }) => 
        <Fragment>
            <div style={window.innerWidth > 768 
                ? { 
                    display: 'flex', 
                    flexDirection: 'row',
                    marginBottom: 27, 
                    }
                : {}}>
                {starGenerator(rating).map((score, index) => 
                    <Rate 
                        key={index} 
                        src={require(`../../assets/img/rating/${score}.svg`)}
                        // modifier={window.innerWidth > 768 ? '1.5rem' : '1rem'}
                        alt={'rating'} 
                    />    
                )}    
            </div>
        </Fragment>


const Slide = ({ isEvent, information, }) => {

    return (    
        <Fragment>
            {isEvent
                ?
                <Fragment>
                    {window.innerWidth > 768 
                        ?
                        <EventCard>
                            <Grid columns={4}>
                                <Grid.Column 
                                    width={4} 
                                    style={{ paddingRight: 7, }}
                                >
                                    <BookCover
                                        src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                                        size={window.innerWidth > 1024 ? '49vh' : '30vh'}
                                        alt='book cover'
                                    />
                                </Grid.Column>

                                <Grid.Column 
                                    width={4} 
                                    style={{ paddingLeft: 0, }}
                                >
                                    <ColTwo>
                                        <BookInfo information={information} />
                                    </ColTwo>
                                </Grid.Column>

                                <Grid.Column 
                                    width={3} 
                                    as={Responsive}
                                    minWidth={769}
                                    style={{ paddingLeft: 0, paddingRight: 0, }}
                                >
                                    <ColTwo>
                                        <LocationInfo information={information} />                        
                                    </ColTwo>
                                </Grid.Column>
                                <Grid.Column 
                                    width={5}
                                    as={Responsive}
                                    minWidth={769}
                                >
                                    <MapCanvas
                                        src={require(`../../assets/img/other/map.png`)}
                                        alt='Map'
                                    />      
                                </Grid.Column>
                            </Grid>
                        </EventCard>
                        :
                        <MobileCard>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', }}>
                                <div>
                                    <BookCover
                                        src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                                        size={'15vh'}
                                        alt='book cover'
                                        style={{ marginRight: '1rem' }}
                                    />
                                </div>
                                <BookInfo information={information} />
                                <div>
                                    <RatingGenerator rating={information.rating} />
                                </div>
                            </div>
                            <LocationInfo information={information} />
                        </MobileCard>
                    }
                </Fragment>
                :
                <Fragment>
                    {window.innerWidth > 768 
                        ? 
                        <Card>
                            <BookCover
                                src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                                size={'35vh'}
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
                        :
                        <MobileCard>
                            <div style={{ display: 'flex' }}>
                                <BookCover
                                    src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                                    size={'15vh'}
                                    alt='book cover'
                                    style={{ marginRight: '1rem' }}
                                />
                                <div style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    height: '100%', 
                                    alignItems: 'flexEnd', 
                                }}>
                                    <BookInfo information={information} />
                                </div>
                            </div>
                            
                            <div>
                                <RatingGenerator rating={information.rating} />
                            </div>
                        </MobileCard>
                    }
                </Fragment>
            }
        </Fragment>
    )
}

export {
    EventInfo,
    BookInfo, 
    Slide 
}

//<SmallText>Rating: {score}</SmallText>