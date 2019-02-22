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
    SidebarButton,
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
                ? <SidebarButton icon='edit' />
                : <Fragment />
            }             
        </div>
    </Fragment>


const LocationInfo = ({ information }) =>
    <Fragment>
        {window.innerWidth < 769
            ?
            <Grid columns={2}>
                <Grid.Column width={9} style={{ textAlign: 'right' }}>
                    <div style={{ textAlign: 'right' }}>
                        <EventInfo>{information.date}</EventInfo>
                        <EventText>{information.time}</EventText>
                    </div>
                </Grid.Column>
                <Grid.Column width={7} style={{ textAlign: 'right' }}>
                    <div style={{ textAlign: 'right' }}>
                        <EventInfo>{truncate(information.location, 30)}</EventInfo>
                        <EventText>{information.street}</EventText>
                        <EventText>{information.town}</EventText>
                    </div>
                </Grid.Column>
            </Grid>
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
                <EventCard>
                    <Grid columns={window.innerWidth < 769 ? 2 : 4}>
                        <Grid.Column 
                            width={window.innerWidth < 769 ? 6 : 4} 
                            style={{ paddingRight: 7, }}
                        >
                            <BookCover
                                src={require(`../../assets/img/book_img/${information.number}.jpg`)}
                                size={window.innerWidth > 1024 ? '49vh' : (window.innerWidth > 768) ? '30vh' : '15vh'}
                                alt='book cover'
                            />
                            {window.innerWidth < 769 
                                ?
                                <BookInfo information={information} />
                                :
                                <Fragment />                  
                            }
                        </Grid.Column>


                        <Grid.Column 
                            width={window.innerWidth < 769 ? 10 : 4} 
                            style={{ paddingLeft: 0, }}
                        >
                            {window.innerWidth < 769
                                ?
                                <Fragment>
                                    <LocationInfo information={information} />
                                    <MapCanvas
                                        src={require(`../../assets/img/other/map.png`)}
                                        alt='Map'
                                    />                                
                                </Fragment>
                                :
                                <ColTwo>
                                    <BookInfo information={information} />
                                </ColTwo>
                            }
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