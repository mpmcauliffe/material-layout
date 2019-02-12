import React, { Component } from 'react'
import { Slide } from './Slide'
import { 
    CarouselContainer,
    CarouselNav,
    CarouselViewport,} from '../../assets/styles/components/carousel'
import { scrollTo } from '../../assets/javascript/scrollToAnimate'


class Carousel extends Component {
    state = {
        numberOfSlidesToScroll: 4,
        widthOfSlide: 120,
        timeToMoveOneSlide: 200,
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
        //this.checkNumberOfSlidesToScroll();
    }
    checkNumberOfSlidesToScroll = () => {
        // let numberOfSlidesToScroll;
        // if (window.innerWidth <= 980) {
        //     numberOfSlidesToScroll = 'full'
        // } else {
        //     numberOfSlidesToScroll = 4
        // }
        // if(this.state.numberOfSlidesToScroll !==  numberOfSlidesToScroll) {
        //     console.log('in', numberOfSlidesToScroll)
        //     this.setState({ numberOfSlidesToScroll })
        // }
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
                <CarouselViewport 
                    ref='carouselViewport'
                />
                <CarouselNav
                    onClick={this.handleRightNav}
                    icon='angle right'    
                />
            
            </CarouselContainer>
        )
    }
}


export { Carousel }
