import React from 'react'
import { Graphic, Montage, } from '../../assets/styles/components'



const Slideshow = () => {
    
    const imageCards = Array.apply(null, {length: 4}).map(Number.call, Number)
    
    return (
        <Montage>
            {imageCards.map((index) => (
                <li key={index}>
                    <Graphic
                        key={index + 4}
                        id={index}
                        src={require(`../../assets/img/slideshow/${index}.png`)}
                    />
                </li>
            ))}
        </Montage>
    )
}


export { Slideshow }
