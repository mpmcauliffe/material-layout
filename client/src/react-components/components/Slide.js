import React from 'react'
import { carousel, slideStyle } from '../../themes/styles'


const Slide = ({ number, name, author }) => 
        <div style={slideStyle}>
            <img
                src={require(`../../img/${number}.png`)}
                alt='book cover'
            />
            <div>
                <p style={carousel.carouselLabel}>
                    <em>{name}</em>
                    <br />
                    {author}
                </p>
            </div>
        </div>
    

export { Slide }
