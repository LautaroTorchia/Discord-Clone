import React from 'react'
import LeftSide from './LeftSide'
import '../../CSSfiles/HomePage.css'
import RightSide from './RightSide'

function HomePage() {
    return (
        <div className='homePage'>
            <LeftSide />
            <RightSide />
        </div>
    
    )
}

export default HomePage
