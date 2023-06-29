import React from 'react'

function TeamCard({id, name, sprite, handleSelect}) {
    const displaySprite = {
        backgroundImage: `url(${sprite})`,
        animation: 'standingStill 3s infinite',
    }

    const handleClick = () => {
        handleSelect(id)
      }

    return (
        <div className='team-list-container' onClick={handleClick}>
            <h4>{name}</h4>
            <div style={displaySprite} className='team-sprite'></div>
        </div>
    )
}

export default TeamCard