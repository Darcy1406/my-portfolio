import React from 'react'

export default function CompetenceItem({name, score, width}) {
  return (
    <div className='my-4'>
        <div className='flex items-center'>
            <span className='flex-1'>{name}</span>
            <span>{score}%</span>
        </div>
        <div className='w-full h-[5px] rounded-xs my-1' style={{background: "#444853"}}>
            <div className={`${width} h-full rounded-xs`} style={{background: "#00D4FF"}}></div>
        </div>
    </div>
  )
}
