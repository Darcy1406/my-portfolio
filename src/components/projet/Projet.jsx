import React from 'react'

export default function Projet({titre_projet, description_projet, type_projet, etablissement, repo_github, technologies}) {

  return (

    <div id='item-projet' className='w-full p-4 bg-green-200 rounded-sm shadow-sm flex items-center gap-4'>
        
        <div className='container-img w-[100px] h-[100px] bg-blue-400 rounded-[9999px]'>

        </div>

        <div className='flex-1'>
            <p className='text-2xl font-bold'>{titre_projet}</p>
            <span className='text-xs font-light text-center'>{etablissement}</span>  
            <p className='description text-sm'> - {description_projet} -</p>      
            <span> Projet : {type_projet}</span>
            
            <div>
                <p className='font-semibold underline'>Technologies : </p>
                <ul className='text-sm'>
                    {
                        technologies?.map((item, index) => (
                            <li className='mx-4 inline-block' key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className='font-semibold'>Depot Github : </p>
                

            </div>



        </div>

        
    
    </div>

  )
}
