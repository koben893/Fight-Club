import React from 'react'

const animateFighter = {
    "firstattack" : "spellcast 2s steps(4)",
    "secondattack" : "slash 2s steps(3)",
    "thirdattack" : 'thrust 2s steps(4)',
    "default" :  'standingStill 3s infinite'
}

function CpuFighterDisplay({ fighter, cpuAtk}) {
    const { name, sprite, abilities} = fighter;
    const displaySprite = {
        backgroundImage: `url(${sprite})`,
        animation: `${animateFighter[cpuAtk]}`,
        transform: 'scale(5)'
    }
    return (
    <section className='moves-sprite-container'>
        <div className='current-fighter'>
            <div style={displaySprite} className='team-sprite'></div>
        </div>
        <div className='cpu-moves-button-container'>
            <h2 className='teal-header'>{name}</h2>
            <div className='cpu-moves-button-list'>
                <button className='cpu-moves-button' name="firstattack">{abilities[0].firstattack}</button>
                <button className='cpu-moves-button' name="secondattack">{abilities[0].secondattack}</button>
                <button className='cpu-moves-button' name="thirdattack">{abilities[0].thirdattack}</button>
            </div>
        </div>
    </section>
    )
}

export default CpuFighterDisplay
