import React from 'react'

function FighterDisplay({ fighter }) {

    const { name, sprite, tier } = fighter;
    const displaySprite = {
        backgroundImage: `url(${sprite})`,
        animation: 'standingStill 3s infinite',
    }

    return (
        <div className='team-list-container'>
            <h4>{name}</h4>
            <span>hp</span><span>{tier * 30}</span><span>atk</span><span>{tier * 5}</span>
            <div style={displaySprite} className='team-sprite'></div>
        </div>
    )
}

export default FighterDisplay