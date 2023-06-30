import React,{useState} from 'react'

const animateFighter = {
    "firstattack": "partTheSeas 3s steps(4)",
    "secondattack": "partTheSeasBehind 3s steps(4) infinite",
    "thirdattack": 'standingStill 3s infinite',
    "default": 'standingStill 3s infinite'
}

function CpuFighterDisplay({ fighter, cpuAtk}) {
    // const [spriteState, setSpriteState] = useState('default');
    console.log(typeof cpuAtk);
    const { name, sprite} = fighter;
    const displaySprite = {
        backgroundImage: `url(${sprite})`,
        animation: `${animateFighter[cpuAtk]}`,
        transform: 'scale(4)'
    }
    return (
        <section>
            <h4>{name}</h4>
            <div style={displaySprite} className='team-sprite'></div>
        </section>
    )
}

export default CpuFighterDisplay
