import React from 'react'

export default function ParcoursItem({role, duree, titre, etablissement, fonctionnalites}) {
  return (
    <div className='px-[20px] my-4'>

        <div className='border-l border-gray-100 px-4 relative'>
            <div className='w-[15px] h-[15px] rounded-[9999px]  shadow-xl absolute left-[-8px] top-1' style={{background: "#00D4FF"}}></div>
            <div className='flex items-center'>
            <p className='text-lg flex-1'>{role}</p>
            <span className='uppercase text-[#00D4FF]'>{duree}</span>
            </div>
            <span className='uppercase text-sm block my-1 text-[#455064]'>{titre}</span>
            <span className='text-xs block' style={{color: "#455064"}}>{etablissement}</span>
            <ul className='px-8 py-2 my-2 rounded-sm list-disc marker:text-[#00D4FF]' style={{background: "#142132"}}>
                {
                    fonctionnalites.length > 0 && (
                        fonctionnalites.map((item, index) => (
                            <li className='my-2' key={index}>{item}</li>
                        ))
                    )
                }
                
            </ul>
        </div>

    </div>
  )
}
