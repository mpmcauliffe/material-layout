import React, { Component } from 'react'
import { Slide } from './Slide'
import { 
    CarouselContainer,
    CarouselNav,
    CarouselViewport,} from '../../assets/styles/components/carousel'
import { scrollTo } from '../../assets/javascript/scrollToAnimate'
import { alphabetize } from '../../assets/javascript/alphabetize'
import { bookList } from '../../assets/store/store'


class Carousel extends Component {
    state = {
        numberOfSlidesToScroll: 4,
        widthOfSlide: 120,
        timeToMoveOneSlide: 200,
        widthToScroll: 6,
    }

    
    handleLeftNav = e => {
        const { carouselViewport } = this.refs

        let newPosition = carouselViewport.scrollLeft - (this.state.widthOfSlide * this.state.numberOfSlidesToScroll)
        let totalTimeToMove = Math.min((this.state.numberOfSlidesToScroll * this.state.timeToMoveOneSlide), 400)
        
        scrollTo(carouselViewport, newPosition, totalTimeToMove, 'scrollLeft')
    }
    handleRightNav = e => {
        const { carouselViewport } = this.refs

        let newPosition = carouselViewport.scrollLeft + (this.state.widthOfSlide * this.state.numberOfSlidesToScroll)
        let totalTimeToMove = Math.min((this.state.numberOfSlidesToScroll * this.state.timeToMoveOneSlide), 400)
    
        scrollTo(carouselViewport, newPosition, totalTimeToMove, 'scrollLeft')
    }
    onResize = () => {
        this.checkNumberOfSlidesToScroll();
    }
    checkNumberOfSlidesToScroll = () => {
        let numberOfSlidesToScroll;
        if (window.innerWidth <= 980) {
            numberOfSlidesToScroll = 'full'
        } else {
            numberOfSlidesToScroll = 4
        }
        if(this.state.numberOfSlidesToScroll !==  numberOfSlidesToScroll) {
            console.log('in', numberOfSlidesToScroll)
            this.setState({ numberOfSlidesToScroll })
        }
    }
    widthAndTimeToScroll = () => {
        const { carouselViewport } = this.refs

        if(this.state.numberOfSlidesToScroll === 'full') {
            this.setState({
                widthToScroll: carouselViewport.offsetWidth,
                timeToScoll: 400,
            })
        } else {
            this.setState((prevState) => ({
                widthOfSlide: 120,
                timeToMoveOneSlide: 200,
                widthToScroll: prevState.numberOfSlidesToScroll * 120,
            }))
        }
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }
    componentWillMount() {
        window.removeEventListener('resize', this.onResize)
    }
    
    render() {
        console.log('render')
        return (
            <CarouselContainer>
                <CarouselNav 
                    onClick={this.handleLeftNav}
                    icon='angle left'    
                />
                <CarouselViewport ref='carouselViewport'>
                    {alphabetize(bookList).map(book =>
                        <Slide
                            key={book.number}
                            number={book.number}
                            information={book}
                            isEvent={false}
                        />
                    )}
                </CarouselViewport>
                <CarouselNav
                    onClick={this.handleRightNav}
                    icon='angle right'    
                />
            
            </CarouselContainer>
        )
    }
}


export { Carousel }
