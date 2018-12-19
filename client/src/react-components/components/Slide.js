import React from 'react'
import { slideStyle } from '../../themes/styles'


const Slide = ({ number, name, author }) => 
        <div style={slideStyle}>
            <img
                src={require(`../../img/${number}.png`)}
                alt='book cover'
            />
            <div>
                {name}
                {author}
            </div>
        </div>
    

export { Slide }
