import React from 'react'
import { carousel, slideStyle } from '../../themes/styles'


const Slide = ({ number, name, author }) => 
        <div style={slideStyle.card}>
            <img
                src={require(`../../img/${number}.png`)}
                alt='book cover'
                style={slideStyle.image}
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
